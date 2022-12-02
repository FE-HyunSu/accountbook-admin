import React, { useState, useEffect } from "react";
import {
  HistoryBox,
  InnerBox,
  TitleBox,
  AccountListBox,
  FixedButton,
  SkeletonBox,
} from "./style";
import { getData } from "../../../firebase/firestore";
import AccountItem from "../item/index";
import ModalItemAdd from "../modalItemAdd/index";
import Skeleton from "../../layout/skeleton";
import { userData, accountData, updateCheckState } from "../../../store";
import { useRecoilState, useRecoilValue } from "recoil";

const HistoryList = () => {
  const [modalAddAccountItem, setModalAddAccountItem] =
    useState<Boolean>(false);
  const [isLoading, setLoading] = useState<Boolean>(true);
  const skeletonCount = new Array(10).fill("");
  const [globalUserData, setGlobalUserData] = useRecoilState(userData);
  const [globalAccountData, setGlobalAccountData] = useRecoilState(accountData);
  const updateCheck = useRecoilValue(updateCheckState);

  // 최초 모든 정보를 상태값에 저장. (멤버, 입출금 이력)
  const getListAll = async () => {
    let getUserList: any = [];
    let getAccountList: any = [];
    setLoading(true);
    await getData("userList").then((data) => {
      getUserList = data.docs.map((item: any) => {
        return { ...item.data() };
      });
      setGlobalUserData(getUserList);
    });

    await getData("accountList").then((data) => {
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
  }, [updateCheck]);

  return (
    <>
      <HistoryBox>
        <InnerBox>
          <AccountListBox>
            <TitleBox>ACCOUNT HISTORY.</TitleBox>
            <ul>
              {isLoading ? (
                <>
                  {skeletonCount &&
                    skeletonCount.map((item, idx) => (
                      <li key={idx}>
                        <SkeletonBox>
                          <dl>
                            <dt>
                              <strong>
                                <Skeleton
                                  boxWidth={"5rem"}
                                  boxHeight={"2rem"}
                                />
                              </strong>
                              <strong>
                                <Skeleton
                                  boxWidth={"15rem"}
                                  boxHeight={"2rem"}
                                />
                              </strong>
                            </dt>
                            <dd>
                              <Skeleton boxWidth={"8rem"} boxHeight={"2rem"} />
                            </dd>
                          </dl>
                        </SkeletonBox>
                      </li>
                    ))}
                </>
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
