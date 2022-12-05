import React, { useState, useEffect, Suspense, lazy } from "react";
import { getData } from "../../../firebase/firestore";
import AccountItem from "../item/index";
import ModalItemAdd from "../modalItemAdd/index";
import SkeletonList from "../skeletonList";
import { userData, accountData, updateCheckState } from "../../../store";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  HistoryBox,
  InnerBox,
  TitleBox,
  AccountListBox,
  FixedButton,
} from "./style";

const HistoryList = () => {
  const [modalAddAccountItem, setModalAddAccountItem] =
    useState<Boolean>(false);
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [globalUserData, setGlobalUserData] = useRecoilState(userData);
  const [globalAccountData, setGlobalAccountData] = useRecoilState(accountData);
  const updateCheck = useRecoilValue(updateCheckState);
  const getUserListData = () => {
    let getUserList: any = [];
    getData("userList").then((data) => {
      getUserList = data.docs.map((item: any) => {
        return { ...item.data() };
      });
      setGlobalUserData(getUserList);
    });
  };

  const getAccountListData = () => {
    setLoading(true);
    let getAccountList: any = [];
    getData("accountList").then((data) => {
      getAccountList = data.docs.map((item: any) => {
        return { ...item.data(), id: item.id };
      });
      setGlobalAccountData(
        getAccountList.sort(
          (a: any, b: any) => +new Date(b.dateTime) - +new Date(a.dateTime)
        )
      );
      setLoading(false);
    });
  };

  // 최초 모든 정보를 상태값에 저장. (멤버, 입출금 이력)
  const getListAll = async () => {
    setLoading(true);
    await getUserListData();
    await getAccountListData();
  };

  // targetUserId 값으로, 해당 user의 이름을 return 합니다.
  const returnUserName = (targetUserId: number) => {
    return globalUserData.filter((item: any) => {
      return item.userId === targetUserId;
    })[0]?.userName;
  };

  const handleModalOpen = () => {
    setModalAddAccountItem(true);
  };

  const handleModalClose = () => {
    setModalAddAccountItem(false);
  };

  useEffect(() => {
    getListAll();
  }, []);

  useEffect(() => {
    getAccountListData();
  }, [updateCheck]);

  return (
    <>
      <HistoryBox>
        <InnerBox>
          <AccountListBox>
            <TitleBox>ACCOUNT HISTORY.</TitleBox>
            <ul>
              <Suspense>
                {isLoading && isLoading ? (
                  <SkeletonList />
                ) : (
                  globalAccountData &&
                  globalAccountData.map((item: any, idx: number) => {
                    return (
                      <li key={idx}>
                        <AccountItem
                          dateTime={item.dateTime}
                          contents={
                            returnUserName(item.targetId) === undefined
                              ? item.description
                              : returnUserName(item.targetId)
                          }
                          price={item.calculation}
                          keyCode={item.id}
                          dataFix={item.dataFix}
                        />
                      </li>
                    );
                  })
                )}
              </Suspense>
            </ul>
          </AccountListBox>
          <FixedButton onClick={() => handleModalOpen()}>작성하기</FixedButton>
        </InnerBox>
      </HistoryBox>
      {modalAddAccountItem && <ModalItemAdd onClose={handleModalClose} />}
    </>
  );
};

export default HistoryList;
