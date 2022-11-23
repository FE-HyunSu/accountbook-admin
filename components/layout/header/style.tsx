import styled from 'styled-components';

export const HeaderBox = styled.header`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffa5ac;
  z-index: 100;
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
      background-color: #ffa5ac;
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
    color: #cd5c5c;
    text-decoration: none;
    border-radius: 0.4rem;
  }
`;
