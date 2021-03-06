import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { Tooltip } from '../Tooltip';

type ContainerProps = {
  loading: string;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, loading }) => css`
    max-width: 25%;
    width: 100%;
    padding: 0 1.6rem;
    margin-bottom: 4rem;

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

    @media (max-width: 500px) {
      & {
        max-width: 100%;
      }
    }

    > button {
      position: relative;
      border: none;
      background: transparent;
      opacity: ${loading ? 0.8 : 1};

      transition: all 0.3s ease-in-out;

      &:hover {
        opacity: 0.8;
        transform: translateY(-0.8rem);
      }

      img {
        flex: 1;
        width: 100%;
        height: 28rem;
        object-fit: cover;
        background-color: ${theme.colors['gray-500']};
      }

      // Loading style
      div {
        position: absolute;
        top: 35%;
        right: 43%;
      }
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
  `}
`;

export const ButtonsGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: 0.6rem;

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

      &:hover svg {
        color: ${lighten(0.2, theme.colors['gray-900'])};
      }
    }
  `}
`;

export const Popup = styled.div`
  ${({ theme }) => css`
    padding: 3.2rem;

    strong {
      display: block;
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 3.6rem;
      color: ${theme.colors['gray-900']};
    }

    span {
      display: block;
      margin-top: 2.4rem;
      line-height: 3.6rem;
      color: ${theme.colors['gray-900']};
    }

    div {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 2.4rem;
      margin-top: 3.3rem;

      button {
        max-width: 17.6rem;

        &:first-child {
          background: transparent;
          border: 1px solid ${theme.colors['gray-900']};
          color: ${theme.colors['gray-900']};

          transition: all 0.3s;

          &:hover {
            background: ${theme.colors['gray-900']};
            color: ${theme.colors.white};
          }
        }
      }
    }
  `}
`;

export const InfoTooltip = styled(Tooltip)``;
