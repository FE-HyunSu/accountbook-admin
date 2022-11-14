import React from 'react';
import { IntroBox, LoginBox } from './style';

const Intro = () => {
  return (
    <>
      <IntroBox>
        <LoginBox>
          <dl>
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
