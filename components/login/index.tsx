import React, { useState, useEffect, useRef } from 'react';
import { IntroBox, LoginBox, CustomSelect } from './style';
import { loginAuth } from '../../firebase/firestore';
import { useRecoilState } from 'recoil';
import { user } from '../../store';
import Test from '../test/index'; // 외부 컴포넌트에서 상태관리 테스트 체크용.

interface ErrorType {
  name: string;
  code: string;
  message: string;
}

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
    if (iconRef.current) iconRef.current.innerHTML = type;
    setTimeout(() => {
      if (iconRef.current) iconRef.current.innerHTML = '🥸';
    }, 2000);
  };

  const tryLogin = async (email: HTMLSelectElement | null, password: HTMLInputElement | null) => {
    const passwordNone = new Error('passwordNone'); // 패스워드 입력을 안했을때 에러 처리.

    if (email !== null && password !== null && passwordRef.current) {
      try {
        // 입력 유효성 체크.
        if (password.value.length <= 0) {
          throw passwordNone;
        }

        // loginAuth 시작.
        const returnUserInfo = await loginAuth(email.value, password.value);
        const userInfo = returnUserInfo.user;
        setUserInfo({ email: email.value }); // 전역 정보 업데이트. (useRecoilState)
        iconState('🥰');
        alertBox('🙂 관리자 로그인 완료.', '#3aa415');
        console.log('uid : ', userInfo.uid);
      } catch (error) {
        iconState('😰');
        const err = error as ErrorType; // type assertion으로 error 타입을 확실하게 정해줌.
        if (err.message === 'passwordNone') {
          alertBox('패스워드를 입력해 주세요.', '#f90000');
          passwordRef?.current.focus();
        } else {
          switch (err.code) {
            case 'auth/weak-password':
              alertBox('패스워드가 틀렸습니다.', '#f90000');
              break;
            case 'auth/invalid-email':
              alertBox('등록되지 않은 이메일 입니다.', '#f90000');
              break;
            default:
              alertBox('잘못된 정보 입니다.', '#f90000');
          }
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
