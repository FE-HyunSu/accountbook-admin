import React, { useState, useEffect, useRef } from 'react';
import { IntroBox, LoginBox, CustomSelect } from './style';
import { loginAuth } from '../../firebase/firestore';

const Login = () => {
  const [renderCheck, setRenderCheck] = useState<boolean>(false);
  const emailRef = useRef<HTMLSelectElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const iconRef = useRef<HTMLElement | null>(null);
  const alertRef = useRef<HTMLElement | null>(null);
  const alertBox = (text: string, colorCode: string) => {
    if (alertRef.current) {
      alertRef.current.innerHTML = text;
      alertRef.current.style.color = colorCode;
      alertRef.current.classList.add('active');
    }
    setTimeout(() => {
      if (alertRef.current) {
        alertRef.current.innerHTML = '';
        alertRef.current.classList.remove('active');
      }
    }, 2000);
  };
  const iconState = (type: string) => {
    if (type === 'success') {
      if (iconRef.current) iconRef.current.innerHTML = '🥰';
    } else if (type === 'fail') {
      if (iconRef.current) iconRef.current.innerHTML = '😰';
      setTimeout(() => {
        if (iconRef.current) iconRef.current.innerHTML = '🥸';
      }, 2000);
    }
  };
  const tryLogin = (email: HTMLSelectElement | null, password: HTMLInputElement | null) => {
    if (email !== null && password !== null && emailRef.current && passwordRef.current) {
      if (email.value.length <= 0) {
        alertBox('이메일을 입력해 주세요.', '#f90000');
        emailRef.current.focus();
        iconState('fail');
        return false;
      } else if (password.value.length <= 0) {
        alertBox('패스워드를 입력해 주세요.', '#f90000');
        passwordRef.current.focus();
        iconState('fail');
        return false;
      }
      loginAuth(email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          iconState('success');
          alertBox('🙂 관리자 로그인 완료.', '#3aa415');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + ' / ' + errorMessage);
          if (errorCode.includes('email')) {
            alertBox('등록되지 않은 이메일 입니다.', '#f90000');
          } else if (errorCode.includes('internal-error')) {
            alertBox('패스워드가 틀렸습니다.', '#f90000');
          } else {
            alertBox('잘못된 정보 입니다.', '#f90000');
          }
          if (iconRef.current) iconRef.current.innerHTML = '😵';
          setTimeout(() => {
            if (iconRef.current) iconRef.current.innerHTML = '🥸';
          }, 2000);
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
              <p>
                <strong ref={alertRef}>&nbsp;</strong>
              </p>
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
