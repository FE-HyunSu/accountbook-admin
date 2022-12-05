import styled from "styled-components";
import { themeColorSet } from "../../../styles/theme";

export const HeaderBox = styled.header`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  background-color: ${themeColorSet};
  z-index: 10;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
    strong {
      display: block;
      width: 100%;
      margin: 0;
      padding: 2rem 1.5rem;
      font-weight: 300;
      font-size: 1.2rem;
      color: #1a1a1a;
      text-align: left;
      text-transform: uppercase;
      transition: 0.2s;
      transform-origin: 50% 50%;
      em {
        display: block;
        font-size: 1.2rem;
        color: #999;
      }
    }
  }
  & + div,
  & + section {
    margin-top: 5.4rem;
  }
  & + main {
    width: 100%;
    min-height: calc(100vh - 10rem);
    margin: 5rem auto 0;
    overflow: hidden;
  }
  a {
    display: block;
    margin-right: 0.3rem;
    padding: 0.8rem 1.2rem;
    font-weight: 400;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.4);
    text-decoration: none;
    border-radius: 0.4rem;
  }
`;

export const BtnThemeColor = styled.button`
  display: inline-block;
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 0.6rem;
  border-radius: 100%;
  border: 0.1rem solid #fff;
  text-indent: -9999rem;
  box-sizing: border-box;
  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
    border: 0.1rem solid #fff;
  }
  &:focus {
    border: 0.1rem solid #fff;
  }
`;
