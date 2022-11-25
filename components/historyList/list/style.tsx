import styled from "styled-components";
import { media } from "../../../styles/theme";

export const TitleBox = styled.h1`
  display: block;
  padding: 2rem;
  font-weight: 200;
  font-size: 2rem;
  color: #000;
`;
export const HistoryBox = styled.section`
  display: flex;
  justify-content: center;
  p {
    padding: 3rem 0;
    font-size: 3rem;
    color: #000;
  }
`;
export const InnerBox = styled.div`
  display: block;
  margin: auto;
  max-width: 102.4rem;
  width: 100%;
`;
export const AccountListBox = styled.div`
  display: block;
  width: 100%;
  max-width: 800px;
  margin: 3rem auto;
`;
export const FixedButton = styled.button`
  display: block;
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  width: 5rem;
  height: 5rem;
  font-size: 1.4rem;
  color: #fff;
  text-indent: -9999rem;
  background-color: #ffa5ac;
  border-radius: 100%;
  transition: 0.2s;
  transform-origin: 50% 50%;
  &:hover {
    text-indent: 0;
    right: 2rem;
    bottom: 2rem;
    width: 7rem;
    height: 7rem;
    &:before {
      bottom: 3.5rem;
      left: 3.5rem;
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 100%;
      opacity: 0;
    }
    &:after {
      top: 3.5rem;
      right: 3.5rem;
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 100%;
      opacity: 0;
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 0.8rem;
    height: 2.2rem;
    margin: auto;
    transition: 0.2s;
    background-color: #fff;
    transform: rotate(45deg);
  }
  &:after {
    content: "";
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    bottom: 0;
    left: 0;
    width: 0.5rem;
    height: 0.5rem;
    margin: auto;
    background-color: #fff;
    transition: 0.2s;
  }
  ${media.mobile} {
    right: 0;
    bottom: 0;
    width: 100%;
    border-radius: 0;
    text-indent: 0;
    &:hover {
      right: 0;
      bottom: 0;
      width: 100%;
      height: 5rem;
    }
    &:before {
      display: none;
    }
    &:after {
      display: none;
    }
  }
`;
