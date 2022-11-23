import React from 'react';
import { HistoryBox } from './style';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { user } from '../../store';

const HistoryList = () => {
  const userEmail = useRecoilValue(user);
  return (
    <>
      <HistoryBox>
        <p>* 접속 이메일 : {userEmail.email}</p>
      </HistoryBox>
    </>
  );
};

export default HistoryList;
