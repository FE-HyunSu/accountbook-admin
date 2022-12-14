import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { loginAuth } from "../../firebase/firestore";
import { useRecoilState } from "recoil";
import { adminInfo } from "../../store";
import { IntroBox, LoginBox, CustomSelect } from "./style";

interface ErrorType {
  name: string;
  code: string;
  message: string;
}

const Login = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(adminInfo);
  const [renderCheck, setRenderCheck] = useState<boolean>(false);
  const emailRef = useRef<HTMLSelectElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const iconRef = useRef<HTMLElement | null>(null);
  const alertRef = useRef<HTMLElement | null>(null);
  const refLoginBox = useRef<HTMLDivElement | null>(null);
  const alertBox = (text: string, colorCode: string) => {
    if (alertRef.current) {
      alertRef.current.innerHTML = text;
      alertRef.current.style.color = colorCode;
      alertRef.current.classList.add("active");
    }
    setTimeout(() => {
      if (alertRef.current) {
        alertRef.current.classList.remove("active");
      }
    }, 2000);
  };
  const iconState = (type: string) => {
    if (iconRef.current) iconRef.current.innerHTML = type;
    setTimeout(() => {
      if (iconRef.current) iconRef.current.innerHTML = "🥸";
    }, 2000);
  };

  const validation = (
    email: HTMLSelectElement | null,
    password: HTMLInputElement | null
  ) => {
    if (email !== null && password !== null) {
      if (password.value.length < 6) {
        iconState("😰");
        alertBox("패스워드를 6자 이상 입력해 주세요.", "#f90000");
        return false;
      }
      return true;
    }
  };

  const loginFadeOut = () => {
    refLoginBox.current?.classList.add("fade-out");
    setTimeout(() => {
      router.push("/history");
    }, 1600);
  };

  const tryLogin = async (
    email: HTMLSelectElement | null,
    password: HTMLInputElement | null
  ) => {
    if (email !== null && password !== null && passwordRef.current) {
      // validation check.
      if (!validation(email, password)) return false;
      // loginAuth.
      try {
        const returnUserInfo = await loginAuth(email.value, password.value);
        const userInfo: any = returnUserInfo.user;
        const accessKey: string = userInfo.accessToken;
        setUserInfo({ email: email.value, accessToken: accessKey });
        iconState("🥰");
        alertBox("🙂 관리자 로그인 완료.", "#3aa415");
        loginFadeOut();
      } catch (error) {
        iconState("😰");
        const err = error as ErrorType;
        switch (err.code) {
          case "auth/weak-password":
            alertBox("패스워드가 틀렸습니다.", "#f90000");
            break;
          case "auth/invalid-email":
            alertBox("등록되지 않은 이메일 입니다.", "#f90000");
            break;
          default:
            alertBox("잘못된 정보 입니다.", "#f90000");
        }
      }
    }
  };
  useEffect(() => {
    setRenderCheck(true);
  });
  return (
    <>
      <IntroBox ref={refLoginBox}>
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
                  <option value="fe.hyunsu@gmail.com">
                    fe.hyunsu@gmail.com
                  </option>
                </select>
              </CustomSelect>
              <input
                type="password"
                ref={passwordRef}
                placeholder="비밀번호를 입력해주세요."
              />
              <button
                type="button"
                onClick={() => tryLogin(emailRef.current, passwordRef.current)}
              >
                로그인
              </button>
              <strong>PASSWORD : 221016</strong>
            </dd>
          </dl>
        </LoginBox>
      </IntroBox>
    </>
  );
};

export default Login;
