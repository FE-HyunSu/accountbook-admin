import styled from 'styled-components';

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
  border-top: 0.1rem solid #eee;
`;
export const FixedButton = styled.button`
  display: block;
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  width: 5rem;
  height: 5rem;
  color: #fff;
  text-indent: -9999rem;
  background-color: #ffa5ac;
  border-radius: 100%;
  transition: 0.3s;
  &:hover {
    transform: scale(1.2) rotate(10deg);
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 0.8rem;
    height: 2.2rem;
    margin: auto;
    background-color: #fff;
    transform: rotate(45deg);
  }
  &:after {
    content: '';
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    bottom: 0;
    left: 0;
    width: 0.5rem;
    height: 0.5rem;
    margin: auto;
    background-color: #fff;
  }
`;
