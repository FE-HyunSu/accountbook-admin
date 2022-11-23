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
export const AccountListBox = styled.div`
  display: block;
  width: 100%;
  ul {
    li {
      padding: 2rem 0;
      border-bottom: 0.1rem solid #eee;
    }
  }
`;
export const FixedButton = styled.button`
  display: block;
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  width: 5rem;
  height: 5rem;
  color: #fff;
  background-color: #ffa5ac;
  border-radius: 100%;
`;
