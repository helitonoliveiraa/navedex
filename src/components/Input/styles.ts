/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { Tooltip } from '../Tooltip';

type InputProps = {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    display: flex;
    align-self: flex-start;
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors['gray-900']};
  }
`;

export const Container = styled.div<InputProps>`
  ${({
    theme, isErrored, isFilled, isFocused,
  }) => css`
    margin-top: 0.4rem;
    height: 4rem;
    border: 1px solid ${theme.colors['gray-900']};
    display: flex;
    align-items: center;
    width: 100%;

    ${isErrored
    && css`
      border-color: ${theme.colors['red-100']};
    `}

    ${isFilled
    && css`
      color: ${theme.colors['green-300']};
    `}

    ${isFocused
    && css`
      border-color: ${theme.colors['green-300']};
      color: ${theme.colors['green-300']};
    `}

    input {
      flex: 1;
      border: none;
      padding: 0.4rem 0.8rem;
      width: 100%;

      color: ${theme.colors['gray-900']};

      ::placeholder {
        line-height: 1.6rem;
        color: ${theme.colors['gray-500']};
      }
    }

    div {
      margin-right: 1.6rem;
    }
  `}
`;

export const Error = styled(Tooltip)`
  ${({ theme }) => css`
    width: 2rem;
    height: 2rem;
    margin-left: 1.6rem;
    color: ${theme.colors['red-100']};
    cursor: help;

    &::after {
      background: ${theme.colors['red-100']};
      color: ${theme.colors.white};

      @media (max-width: 600px) {
        left: 100%;
        transform: translateX(-100%);
      }
    }

    &::before {
      border-left: 0.8rem solid transparent;
      border-right: 0.8rem solid transparent;

      border-top: 0.8rem solid ${theme.colors['red-100']};
    }
  `}
`;
