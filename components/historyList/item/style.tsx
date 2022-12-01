import styled from "styled-components";

export const AccountCard = styled.dl`
  display: flex;
  position: relative;
  width: 100%;
  border-top: 1px solid #f4f4f4;
  font-size: 1.4rem;
  transition: 0.2s;
  box-sizing: border-box;
  dt {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    &.active {
      &:before {
        content: "";
        position: absolute;
        top: 2.6rem;
        left: 1.4rem;
        width: 0.3rem;
        height: 0.3rem;
        background-color: #ff3333;
        border-radius: 1rem;
      }
    }
    strong {
      display: inline-block;
      font-weight: 400;
      color: #3a3a3a;
      letter-spacing: -0.05rem;
    }
    span {
      display: inline-block;
      padding-right: 1.5rem;
      font-weight: 500;
      font-size: 1.2rem;
      color: #777;
    }
  }
  dd {
    flex: 1 1;
    min-width: 10rem;
    padding: 2rem;
    font-weight: 400;
    text-align: right;
    &:hover {
      button {
        margin-left: 1rem;
        transform: scale(1, 1);
        opacity: 1;
      }
    }
    button {
      margin-left: -4rem;
      padding: 0.5rem 1rem;
      font-weight: 400;
      font-size: 1.4rem;
      color: #fff;
      background-color: #3a3a3a;
      border-radius: 0.5rem;
      opacity: 0;
      transform: scale(0.1, 1);
      transition: 0.2s;
      transform-origin: 100% 50%;
      overflow: hidden;
    }
    &.plus {
      color: #0a7ec6;
      &:before {
        content: "+";
      }
    }
    &.minus {
      color: #000;
    }
  }
`;
