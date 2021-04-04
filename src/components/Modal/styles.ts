import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors['background-overlay']};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    max-width: 59.2rem;
    width: 100%;
    padding: 3.2rem;
    position: relative;

    button {
      position: absolute;
      top: 2.4rem;
      right: 2.4rem;

      font-size: 0;
      border: 0;
      background: transparent;

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    header {
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 3.6rem;
      color: ${theme.colors['gray-900']};
    }

    p {
      margin-top: 2.4rem;
      line-height: 3.6rem;
      color: ${theme.colors['gray-900']};
    }
  `}
`;
