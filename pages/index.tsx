import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Login from '../components/Login';
import { firebaseClientAuth } from '../client/firebase';

export default function Home() {
  const name: string = 'mason';
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const login = async () => {
    // 1. Firebase 로그인
    const credential = await signInWithEmailAndPassword(firebaseClientAuth, email, password);
    console.log(signInWithEmailAndPassword);
    console.log(firebaseClientAuth);
    console.log(credential);
  };

  return (
    <>
      <div>hello, {name}</div>
      <div>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <button onClick={login}>로그인</button>
      </div>
      <Login title="login" content="gogo" />
    </>
  );
}
