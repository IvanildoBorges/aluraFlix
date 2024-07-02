import styled from 'styled-components';

export const ContainerNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  min-height: 30vh;
  text-align: center;
  transition: all 300ms ease-in;

  @media screen and (max-width: 768px) {
    & {
      width: 90vw;
      min-height: 20vh;
    }
    .title {
      font-size: 1.75rem;
      margin: 0.5rem;
    }
  }
`;