/* eslint-disable indent */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    cursor: pointer;

    &::after {
      content: attr(data-title);

      position: absolute;
      display: block;
      width: max-content;
      padding: 0.8rem;
      border-radius: 0;

      background: ${theme.colors['gray-800']};
      color: ${theme.colors.white};
      font-weight: 500;
      font-size: 1.2rem;

      bottom: calc(100% + 1.2rem);

      left: 50%;
      transform: translateX(-50%);
    }

    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: -1.3rem;
      bottom: 0;

      border-left: 0.8rem solid transparent;
      border-right: 0.8rem solid transparent;

      border-top: 0.8rem solid ${theme.colors['gray-800']};

      left: 50%;
      transform: translateX(-50%);
    }

    &::after,
    ::before {
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
    }

    &:hover {
      ::after,
      ::before {
        opacity: 1;
        visibility: visible;
      }
    }
  `}
`;
