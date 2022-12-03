import styled, { keyframes } from "styled-components";
import { themeColorSet } from "../../styles/theme";

const bgMotion = keyframes`
  0%{height:50vh; opacity:1;}
  100%{height:0vh; opacity:.8;}
`;
const viewMotion = keyframes`
  0%{transform: scale(0.1, 0.1) rotate(90deg); opacity:0;}
  100%{transform: scale(1, 1) rotate(0deg); opacity:1;}
`;
const bounceMotion = keyframes`
  0%{transform:translateY(0);}
  100%{transform:translateY(-10px);}
`;
const bgfadeOut = keyframes`
  100%{background-color:rgba(255,255,255,1);}
`;
const zoomOut = keyframes`
  0%{transform:scale(1,1) rotate(0deg); opacity:1;}
  70%{transform:scale(1.2,1.2) rotate(-10deg); opacity:1;}
  100%{transform:scale(.1,.1) rotate(20deg); opacity:0;}
`;

export const IntroBox = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: calc(100vh - 10rem);
  background-color: ${themeColorSet};
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    background-color: #fff;
    animation: ${bgMotion} 0.8s 0.5s forwards alternate;
    z-index: 2;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    background-color: #fff;
    animation: ${bgMotion} 0.8s 0.5s forwards alternate;
    z-index: 2;
  }
  &.fade-out {
    animation: ${bgfadeOut} 1s 0.5s forwards alternate;
    div {
      animation: ${zoomOut} 0.5 s 1s forwards alternate;
      dl {
        dt {
          animation: ${zoomOut} 1s forwards alternate;
        }
        dd {
          p {
            animation: ${zoomOut} 1s 0.2s forwards alternate;
          }
          strong {
            opacity: 0;
          }
          div {
            animation: ${zoomOut} 1s 0.3s forwards alternate;
          }
          input {
            animation: ${zoomOut} 1s 0.4s forwards alternate;
          }
          button {
            animation: ${zoomOut} 1s 0.5s forwards alternate;
          }
        }
      }
    }
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
    padding: 4rem 2rem;
    background-color: transparent;
    box-sizing: border-box;
    &.active {
      :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 1rem;
        transform: scale(0.1, 0.1);
        opacity: 0;
        animation: ${viewMotion} 0.8s 1s forwards alternate;
      }
      dt {
        animation: ${viewMotion} 0.8s 0.6s forwards alternate;
      }
      dd {
        animation: ${viewMotion} 0.8s 0.8s forwards alternate;
      }
    }
    dt {
      text-align: center;
      transform: scale(0.1, 0.1);
      opacity: 0;
      transform-origin: 50% 100%;
      em {
        display: block;
        font-size: 6rem;
        animation: ${bounceMotion} 0.8s 0.2s infinite alternate;
      }
      strong {
        display: block;
        font-weight: 300;
        font-size: 1.6rem;
        color: #7a7a7a;
        span {
          display: inline-block;
          padding-top: 0.7rem;
          font-weight: 300;
          font-size: 1.6rem;
          color: #3a3a3a;
        }
      }
    }
    dd {
      padding: 2rem 0 2rem;
      transform: scale(0.1, 0.1);
      opacity: 0;
      transform-origin: 50% 0%;
      strong {
        display: block;
        padding-top: 0.5rem;
        font-weight: 300;
        font-size: 1.1rem;
        color: #999;
        text-align: right;
        transition: 0.5s;
      }
      select {
        display: block;
        position: relative;
        width: 100%;
        margin-bottom: 0.5rem;
        padding: 1rem;
        font-size: 1.4rem;
        color: #000;
        background-color: #fff;
        box-sizing: border-box;
        border: 0.1rem solid #ddd;
        border-radius: 0.3rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        option {
          color: #000;
        }
      }
      input {
        display: block;
        width: 100%;
        margin-bottom: 0.5rem;
        padding: 1rem;
        font-size: 1.4rem;
        box-sizing: border-box;
        border: 0.1rem solid #ddd;
        border-radius: 0.3rem;
        &::placeholder {
          font-weight: 400;
          color: #cdcdcd;
        }
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
      p {
        min-height: 2rem;
        padding-bottom: 1rem;
        font-weight: 400;
        font-size: 1.2rem;
        text-align: center;
        strong {
          display: block;
          font-weight: 400;
          text-align: center;
          opacity: 0;
          transition: 0.5s;
          transform: scale(1, 0.1);
          &.active {
            transform: scale(1, 1);
            opacity: 1;
          }
        }
      }
    }
  }
`;

export const CustomSelect = styled.div`
  display: block;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 1.5rem;
    bottom: 0.5rem;
    width: 0.7rem;
    height: 0.7rem;
    margin: auto;
    border-bottom: 0.1rem solid #3a3a3a;
    border-right: 0.1rem solid #3a3a3a;
    transform: rotate(45deg);
  }
`;
