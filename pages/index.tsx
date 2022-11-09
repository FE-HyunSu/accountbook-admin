import React, { useState } from 'react';
import Login from '../components/Login';

export default function Home() {
  const name: string = 'mason';
  const [jwt, setJwt] = useState<String>('');

  return (
    <>
      <div>hello, {name}</div>
      <Login />
      <div>
        로그인 결과 jwt 토큰 가져오기
        <br />
        <br />
      </div>
      <p>{jwt}</p>
    </>
  );
}
