import React, { useState, useEffect, useRef } from 'react';
import { IntroBox, LoginBox, CustomSelect } from './style';
import { loginAuth } from '../../firebase/firestore';

const Login = () => {
  const [renderCheck, setRenderCheck] = useState<boolean>(false);
  const emailRef = useRef<HTMLSelectElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const iconRef = useRef<HTMLElement | null>(null);
  const tryLogin = (email: HTMLSelectElement | null, password: HTMLInputElement | null) => {
    if (email !== null && password !== null && emailRef.current && passwordRef.current) {
      if (email.value.length <= 0) {
        alert('이메일을 입력해 주세요.');
        emailRef.current.focus();
        if (iconRef.current) iconRef.current.innerHTML = '😖';
        return false;
      } else if (password.value.length <= 0) {
        alert('패스워드를 입력해 주세요.');
        passwordRef.current.focus();
        if (iconRef.current) iconRef.current.innerHTML = '😖';
        return false;
      }
      loginAuth(email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          if (iconRef.current) iconRef.current.innerHTML = '🥰';
          alert('🙂관리자 로그인 완료.');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + ' / ' + errorMessage);
          if (errorCode.includes('email')) {
            alert('등록되지 않은 이메일 입니다.');
          } else if (errorCode.includes('internal-error')) {
            alert('패스워드가 틀렸습니다.');
          } else {
            alert('잘못된 정보 입니다.');
          }
          if (iconRef.current) iconRef.current.innerHTML = '😵';
        });
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
              <em ref={iconRef}>🥸</em>
              <strong>
                ACCOUNTBOOK
                <br />
                <span>ADMIN</span>
              </strong>
            </dt>
            <dd>
              <CustomSelect>
                <select ref={emailRef}>
                  <option value="fe.hyunsu@gmail.com">fe.hyunsu@gmail.com</option>
                </select>
              </CustomSelect>
              <input type="password" ref={passwordRef} placeholder="비밀번호를 입력해주세요." />
              <button type="button" onClick={() => tryLogin(emailRef.current, passwordRef.current)}>
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
