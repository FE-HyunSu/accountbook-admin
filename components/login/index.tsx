import React, { useState, useEffect, useRef } from 'react';
import { IntroBox, LoginBox, CustomSelect } from './style';
import { loginAuth } from '../../firebase/firestore';
import { useRecoilState } from 'recoil';
import { user } from '../../store';
import Test from '../test/index'; // 외부 컴포넌트에서 상태관리 테스트 체크용.

const Login = () => {
  const [userInfo, setUserInfo] = useRecoilState(user);
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

  const tryLogin = async (email: HTMLSelectElement | null, password: HTMLInputElement | null) => {
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

      try {
        const returnUserInfo = await loginAuth(email.value, password.value);
        const userInfo = returnUserInfo.user;
        console.log(userInfo);
        iconState('success');
        setUserInfo({ email: email.value });
        alertBox('🙂 관리자 로그인 완료.', '#3aa415');

        console.log('uid : ', userInfo.uid);
        console.log('email : ', userInfo.email);
      } catch (error: unknown) {
        if (typeof error === 'string') {
          if (iconRef.current) iconRef.current.innerHTML = '😵';
          switch (error) {
            case 'auth/weak-password':
              alertBox('패스워드가 틀렸습니다.', '#f90000');
              break;
            case 'auth/invalid-email':
              alertBox('등록되지 않은 이메일 입니다.', '#f90000');
              break;
            default:
              alertBox('잘못된 정보 입니다.', '#f90000');
          }
          setTimeout(() => {
            if (iconRef.current) iconRef.current.innerHTML = '🥸';
          }, 2000);
        }
      }
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
              <Test />
            </dd>
          </dl>
        </LoginBox>
      </IntroBox>
    </>
  );
};

export default Login;
