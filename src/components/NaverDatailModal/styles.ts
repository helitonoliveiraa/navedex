import styled, { css } from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;

  img {
    max-width: 50rem;
    width: 100%;
    height: 50rem;
    object-fit: cover;
  }

  > div {
    margin: 3.2rem;
    height: inherit;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Content = styled.main`
  ${({ theme }) => css`
    header {
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 3.6rem;
      color: ${theme.colors['black-1000']};
    }

    strong {
      display: flex;
      margin-top: 2.4rem;
      font-weight: 600;
      line-height: 2.4rem;
      color: ${theme.colors['gray-900']};
    }

    span {
      display: block;
      margin-top: 1rem;
      line-height: 2.4rem;
      color: ${theme.colors['gray-900']};
    }
  `}
`;

export const ButtonsContainer = styled.footer`
  ${({ theme }) => css`
    align-items: flex-start;
    margin-top: auto;

    button {
      border: none;
      padding: 0.4rem;
      background: transparent;

      & + button {
        margin-left: 0.8rem;
      }

      svg {
        width: 2.4rem;
        height: 2.4rem;
        color: ${theme.colors['gray-900']};
      }
    }
  `}
`;
