import React, { useState, useEffect } from "react";
import {
  HistoryBox,
  InnerBox,
  TitleBox,
  AccountListBox,
  FixedButton,
} from "./style";
import { getData } from "../../../firebase/firestore";
import AccountItem from "../item/index";
import ModalItemAdd from "../modalItemAdd/index";

interface memberListInit {
  id: number;
  userName?: string;
  imgUrl?: string;
}

interface accountListInit {
  targetId: number;
  dateTime: string;
  description?: string;
  calculation: number;
}

const HistoryList = () => {
  const [memberList, setMemberList] = useState<any>();
  const [accountList, setAccountList] = useState<accountListInit[]>([]);
  const [modalAddAccountItem, setModalAddAccountItem] = useState(false);

  // 최초 모든 정보를 상태값에 저장. (멤버, 입출금 이력)
  const getListAll = async () => {
    let getUserList: Array<memberListInit> = [];
    let getAccountList: Array<accountListInit> = [];
    await getData("userList").then((data) => {
      getUserList = data.docs.map((item: any) => {
        return { ...item.data(), id: item.id };
      });
      setMemberList(getUserList);
    });

    await getData("accountList").then((data) => {
      getAccountList = data.docs.map((item: any) => {
        return { ...item.data(), id: item.id };
      });
      setAccountList(getAccountList);
    });
  };

  // 금액 단위로 숫자를 콤마 찍어서 return.
  const addComa = (number: number) => {
    const numberComa = number.toString().split(".");
    numberComa[0] = numberComa[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numberComa.join(".");
  };

  // userId 값으로, 해당 user의 이름을 return 합니다.
  const returnUserName = (userId: number) => {
    let returnName: string | undefined = "(이름없음)";
    memberList.forEach((item: any) => {
      if (Number(item.id) === userId) returnName = item.userName;
    });
    return returnName;
  };

  const addAccountItem = () => {
    setModalAddAccountItem(true);
  };

  // Modal Components에 close 처리할 함수를 전달해야함.
  const handleModalClose = () => {
    setModalAddAccountItem(false);
  };

  useEffect(() => {
    getListAll();
    console.log(memberList);
  }, []);

  return (
    <>
      <HistoryBox>
        <InnerBox>
          <AccountListBox>
            <TitleBox>ACCOUNT HISTORY.</TitleBox>
            <ul>
              {accountList &&
                accountList
                  .sort(
                    (a: any, b: any) =>
                      +new Date(b.dateTime) - +new Date(a.dateTime)
                  )
                  .map((item: any, idx: number) => {
                    return (
                      <li key={idx}>
                        <AccountItem
                          dateTime={item.dateTime}
                          accountName={returnUserName(item.targetId)}
                          price={item.calculation}
                          description={item.description}
                        />
                      </li>
                    );
                  })}
            </ul>
          </AccountListBox>
          <FixedButton onClick={() => addAccountItem()}>작성하기</FixedButton>
        </InnerBox>
      </HistoryBox>
      {modalAddAccountItem && (
        <ModalItemAdd onClose={handleModalClose} userListData={memberList} />
      )}
    </>
  );
};

export default HistoryList;
