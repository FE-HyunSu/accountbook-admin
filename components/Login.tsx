import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseClientAuth } from '../firebase/firebaseConfig';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const login = async () => {
    await signInWithEmailAndPassword(firebaseClientAuth, email, password)
      .then((userCredential) => {
        // login 성공.
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ' / ' + errorMessage);
      });
  };
  return (
    <>
      <div>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <button onClick={login}>로그인</button>
      </div>
    </>
  );
};

export default Login;
