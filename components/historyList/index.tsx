import React, { useState, useEffect } from 'react';
import { HistoryBox, AccountListBox, FixedButton } from './style';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { adminInfo } from '../../store';
import { getData, setData } from '../../firebase/firestore';

export type memberListInit = {
  id: number;
  userName?: string;
  imgUrl?: string;
};

export type accountListInit = {
  targetId: number;
  dateTime: string;
  description?: string;
  calculation: number;
};

const HistoryList = () => {
  const userEmail = useRecoilValue(adminInfo);
  const [memberListAll, setMemberListAll] = useState<memberListInit[]>([]);
  const [memberList, setMemberList] = useState<memberListInit[]>([]);
  const [accountList, setAccountList] = useState<accountListInit[]>([]);
  const [accountListAll, setAccountListAll] = useState<accountListInit[]>([]);
  const [totalPrice, setTotalPrice] = useState<string>('0');
  const [nbbang, setNbbang] = useState<string>('0');
  const [allCheck, setAllCheck] = useState<boolean>(true);

  // 최초 모든 정보를 상태값에 저장. (멤버, 입출금 이력)
  const getListAll = async () => {
    let getUserList: Array<memberListInit> = [];
    let getAccountList: Array<accountListInit> = [];
    await getData('userList').then((data) => {
      getUserList = data.docs.map((item: any) => {
        return { ...item.data(), id: item.id };
      });
      setMemberListAll(getUserList);
      setMemberList(getUserList);
    });

    await getData('accountList').then((data) => {
      getAccountList = data.docs.map((item: any) => {
        return { ...item.data(), id: item.id };
      });
      setAccountListAll(getAccountList);
      setAccountList(getAccountList);
    });
  };

  // 금액 단위로 숫자를 콤마 찍어서 return.
  const addComa = (number: number) => {
    const numberComa = number.toString().split('.');
    numberComa[0] = numberComa[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return numberComa.join('.');
  };

  // userId 값으로, 해당 user의 이름을 return 합니다.
  const returnUserName = (userId: number) => {
    let returnName: string | undefined = '(이름없음)';
    memberList.forEach((item: memberListInit) => {
      if (Number(item.id) === userId) returnName = item.userName;
    });
    return returnName;
  };

  useEffect(() => {
    getListAll();
  }, []);

  return (
    <>
      <HistoryBox>
        {/* <p>* 접속 이메일 : {userEmail.email}</p> */}
        <AccountListBox>
          <ul>
            {accountList &&
              accountList
                .sort((a: any, b: any) => +new Date(b.dateTime) - +new Date(a.dateTime))
                .map((item: any, idx: number) => {
                  return (
                    <li key={idx}>
                      {item.dateTime}
                      &nbsp;&nbsp;
                      {returnUserName(item.targetId)}
                      &nbsp;&nbsp;
                      {item.calculation}
                      &nbsp;&nbsp;
                      {item.description}
                      &nbsp;&nbsp;
                      {idx}
                    </li>
                  );
                })}
          </ul>
        </AccountListBox>
        <FixedButton onClick={() => alert('입력 모달 팝업 필요')}>입력</FixedButton>
      </HistoryBox>
    </>
  );
};

export default HistoryList;
