import React from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { user } from '../../store';

const Test = () => {
  const userEmail = useRecoilValue(user);
  return (
    <>
      <div style={{ paddingTop: '1rem' }}>* userEmail : {userEmail.email}</div>
    </>
  );
};

export default Test;
