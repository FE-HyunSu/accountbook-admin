import styled, { keyframes } from 'styled-components';

const bgMotion = keyframes`
  0%{height:50vh; opacity:1;}
  100%{height:0vh; opacity:.8;}
`;
const viewMotion = keyframes`
  0%{transform:scale(.1, .1); opacity:0;}
  100%{transform:scale(1, 1); opacity:1;}
`;
const bounceMotion = keyframes`
  0%{transform:translateY(0);}
  100%{transform:translateY(-10px);}
`;

export const IntroBox = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    background-color: #ffa5ac;
    animation: ${bgMotion} 0.8s forwards alternate;
    z-index: 2;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    background-color: #ffa5ac;
    animation: ${bgMotion} 0.8s forwards alternate;
    z-index: 2;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  dl {
    display: block;
    position: relative;
    width: 30rem;
    dt {
      text-align: center;
      transform: scale(0.1, 0.1);
      opacity: 0;
      animation: ${viewMotion} 0.8s 0.2s forwards alternate;
      transform-origin: 50% 100%;
      em {
        display: block;
        font-size: 7rem;
        animation: ${bounceMotion} 0.8s 0.2s infinite alternate;
      }
      strong {
        display: block;
        font-weight: 300;
        font-size: 2rem;
        color: #7a7a7a;
        span {
          display: inline-block;
          padding-top: 0.7rem;
          font-weight: 300;
          font-size: 2rem;
          color: #3a3a3a;
        }
      }
    }
    dd {
      padding: 2rem 0 10rem;
      transform: scale(0.1, 0.1);
      opacity: 0;
      animation: ${viewMotion} 0.8s 0.4s forwards alternate;
      transform-origin: 50% 0%;
      input {
        display: block;
        width: 100%;
        margin-bottom: 0.5rem;
        padding: 1rem;
        font-size: 1.4rem;
        box-sizing: border-box;
        border: 0.1rem solid #ccc;
        border-radius: 0.3rem;
      }
      button {
        width: 100%;
        margin-top: 2rem;
        padding: 1.4rem 0;
        font-size: 1.4rem;
        color: #fff;
        background-color: #3a3a3a;
        border-radius: 0.3rem;
        transition: 0.3s;
        &:hover {
          background-color: #1a1a1a;
        }
      }
    }
  }
`;
