import React, { useState, useEffect } from 'react';
import { IntroBox, LoginBox } from './style';

const Intro = () => {
  const [renderCheck, setRenderCheck] = useState<boolean>(false);
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
              <input type="text" placeholder="이메일을 입력해주세요." />
              <input type="password" placeholder="비밀번호를 입력해주세요." />
              <button type="button">로그인</button>
            </dd>
          </dl>
        </LoginBox>
      </IntroBox>
    </>
  );
};

export default Intro;
