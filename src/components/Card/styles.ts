import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 25%;
    width: 100%;
    padding: 0 1.6rem;
    margin-bottom: 2rem;

    > button {
      border: none;
      background: transparent;
    }

    @media (max-width: 970px) {
      & {
        max-width: calc(100% / 3);
        padding: 0 1.2rem;
      }
    }

    @media (max-width: 670px) {
      & {
        max-width: 50%;
        padding: 0 0.8rem;
      }
    }

    @media (max-width: 440px) {
      & {
        max-width: 100%;
      }
    }

    img {
      flex: 1;
      max-width: 100%;
      height: 28rem;
      object-fit: cover;
      background-color: ${theme.colors['gray-500']};
    }

    strong {
      display: flex;
      margin-top: 1.6rem;
      line-height: 1.8rem;
      color: ${theme.colors['gray-900']};
    }

    span {
      display: flex;
      margin-top: 0.4rem;
      line-height: 2.4rem;
      color: ${theme.colors['gray-900']};
    }

    div {
      display: flex;
      align-items: center;
      margin-top: 1rem;

      button {
        border: none;
        background: transparent;
        padding: 0.4rem;

        & + button {
          margin-left: 0.8rem;
        }

        svg {
          width: 2.4rem;
          height: 2.4rem;
          color: ${theme.colors['gray-900']};
        }
      }
    }
  `}
`;
