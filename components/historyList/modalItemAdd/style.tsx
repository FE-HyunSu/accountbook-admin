import styled from "styled-components";

export const BtnClose = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 4rem;
  height: 4rem;
  text-indent: -999rem;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 0.1rem;
    height: 2rem;
    margin: auto;
    background-color: #1a1a1a;
    transform: rotate(45deg);
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 2rem;
    height: 0.1rem;
    margin: auto;
    background-color: #1a1a1a;
    transform: rotate(45deg);
  }
`;

export const ModalAccountAdd = styled.div`
  padding: 3rem;
  h1 {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    font-weight: 400;
    font-size: 1.6rem;
    color: #1a1a1a;
    border-bottom: 0.1rem solid #eee;
  }
  .react-datepicker__triangle {
    transform: translate3d(30px, 0px, 0px) !important;
  }
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    padding: 0.5rem 0;
    font-size: 1.1rem;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    width: 2.4rem;
    padding: 0.2rem 0;
  }
  .react-datepicker {
    font-size: 1.2rem;
  }

  dl {
    dt {
      padding: 1.8rem 0 1rem;
      font-weight: 400;
      font-size: 1.4rem;
      color: #3a3a3a;
      &:before {
        content: "*";
        color: #ff3333;
      }
    }
    dd {
      input {
        width: 100%;
        padding: 1.4rem;
        border: 0.1rem solid #ddd;
        box-sizing: border-box;
        &::placeholder {
          color: #999;
        }
      }
      p {
        padding-top: 0.4rem;
        min-height: 1.5rem;
        font-weight: 400;
        font-size: 1.1rem;
        color: #ff4444;
        box-sizing: border-box;
      }
      .select-box {
        select {
          width: 100%;
          padding: 1.4rem;
          font-size: 1.4rem;
          color: #1a1a1a;
          background-color: #fff;
          border: 0;
          outline: 0;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        position: relative;
        width: 100%;
        border: 0.1rem solid #ddd;
        box-sizing: border-box;
        &:after {
          content: "";
          position: absolute;
          top: 0;
          right: 1.5rem;
          bottom: 0.5rem;
          width: 0.8rem;
          height: 0.8rem;
          margin: auto;
          border-right: 0.1rem solid #3a3a3a;
          border-bottom: 0.1rem solid #3a3a3a;
          transform: rotate(45deg);
        }
      }
    }
  }
`;

export const BtnApply = styled.button`
  display: block;
  width: 100%;
  margin-top: 3rem;
  padding: 1.4rem 0;
  font-weight: 400;
  font-size: 1.6rem;
  color: #fff;
  background-color: #3a3a3a;
  transition: 0.3s;
  &:hover {
    background-color: #1a1a1a;
  }
`;
