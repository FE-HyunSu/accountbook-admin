import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Login from '../components/Login';
import { firebaseClientAuth } from '../client/firebase';

export default function Home() {
  const name: string = 'mason';
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [jwt, setJwt] = useState<String>('');
  const login = async () => {
    // step1. Firebase 로그인
    const credential = await signInWithEmailAndPassword(firebaseClientAuth, email, password);
    console.log(signInWithEmailAndPassword);
    console.log(firebaseClientAuth);
    console.log(credential);

    // 2. JWT 생성
    const idToken = await credential.user.getIdToken();
    // console.log(idToken);
    setJwt(idToken);
  };

  return (
    <>
      <div>hello, {name}</div>
      <div>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <button onClick={login}>로그인</button>
      </div>
      <div>
        로그인 결과 jwt 토큰 가져오기
        <br />
        <br />
      </div>
      <p>{jwt}</p>
    </>
  );
}
