/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { Tooltip } from '../Tooltip';

type InputProps = {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
};

export const Container = styled.div<InputProps>`
  ${({
    theme, isErrored, isFilled, isFocused,
  }) => css`
    margin-top: 0.4rem;
    height: 4rem;
    border: 1px solid ${theme.colors['gray-900']};
    display: flex;
    align-items: center;

    & + label {
      margin-top: 3.2rem;
    }

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

      ::placeholder {
        line-height: 2.4rem;
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

    &::after {
      background: ${theme.colors['red-100']};
      color: ${theme.colors.white};
    }

    &::before {
      border-left: 0.8rem solid transparent;
      border-right: 0.8rem solid transparent;

      border-top: 0.8rem solid ${theme.colors['red-100']};
    }
  `}
`;
