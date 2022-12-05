import styled from "styled-components";

export const SkeletonBox = styled.div`
  border-top: 0.1rem solid #eee;
  padding: 2.2rem 2rem;
  box-sizing: border-box;
  dl {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    dt {
      flex: 1 auto;
      strong {
        width: 5rem;
        margin-right: 1rem;
      }
    }
    dd {
      width: 8rem;
      text-align: right;
    }
  }
`;
