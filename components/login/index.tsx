import React, { useState, useEffect, useRef } from 'react';
import { IntroBox, LoginBox } from './style';
import { login } from '../../firebase/firestore';

const Login = () => {
  const [renderCheck, setRenderCheck] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const loginGo = (email: HTMLInputElement | null, password: HTMLInputElement | null) => {
    if (email !== null && password !== null && emailRef.current && passwordRef.current) {
      if (email.value.length <= 0) {
        alert('이메일을 입력해 주세요.');
        emailRef.current.focus();
        return false;
      } else if (password.value.length <= 0) {
        alert('패스워드를 입력해 주세요.');
        passwordRef.current.focus();
        return false;
      }
      login(email.value, password.value);
    }
  };

  useEffect(() => {
    setRenderCheck(true);
  });
  return (
    <>
      <IntroBox>
        <LoginBox>
          <dl className={renderCheck ? `active` : ``}>
            <dt>
              <em>🥸</em>
              <strong>
                ACCOUNTBOOK
                <br />
                <span>ADMIN</span>
              </strong>
            </dt>
            <dd>
              <input type="text" ref={emailRef} placeholder="이메일을 입력해주세요." />
              <input type="password" ref={passwordRef} placeholder="비밀번호를 입력해주세요." />
              <button type="button" onClick={() => loginGo(emailRef.current, passwordRef.current)}>
                로그인
              </button>
            </dd>
          </dl>
        </LoginBox>
      </IntroBox>
    </>
  );
};

export default Login;
