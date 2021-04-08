import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { Tooltip } from '../Tooltip';

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    background: ${theme.colors.white};

    > button {
      position: absolute;
      top: 1.6rem;
      right: 1.6rem;
      font-size: 0;
      border: none;
      background: transparent;

      svg {
        width: 2.4rem;
        height: 2.4rem;
        color: ${theme.colors['gray-900']};
      }

      &:hover svg {
        color: ${lighten(0.2, theme.colors['gray-900'])};
      }
    }

    img {
      max-width: 50%;
      width: 100%;
      height: 50rem;
      object-fit: cover;
      background: ${theme.colors['gray-500']};
    }

    > div {
      margin: 3.2rem;
      height: inherit;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    @media (max-width: 700px) {
      flex-direction: column;

      img {
        max-width: 100%;
        height: 30rem;
      }
    }
  `}
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

      &:hover svg {
        color: ${lighten(0.2, theme.colors['gray-900'])};
      }
    }
  `}
`;

export const InfoTooltip = styled(Tooltip)``;
