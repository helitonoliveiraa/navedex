import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { Button } from '../../components/Button';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 63.2rem;
    margin: 4rem auto 0;
    padding: 0 2rem;

    form {
      > div {
        display: flex;
        align-items: center;
        margin-bottom: 3.2rem;

        button {
          font-size: 0;
          border: none;
          background: transparent;

          svg {
            width: 3.6rem;
            height: 3.6rem;
            color: ${theme.colors['black-1000']};
            transition: color 0.2s;
          }

          &:hover svg {
            color: ${lighten(0.2, theme.colors['gray-900'])};
          }
        }

        strong {
          font-size: 2.4rem;
          font-weight: 600;
          line-height: 3.6rem;
          margin-left: 1.6rem;
          color: ${theme.colors['gray-900']};
          text-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
        }
      }
    }
  `}
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
`;

export const SaveButton = styled(Button)`
  max-width: 17.6rem;
  margin-left: auto;

  svg {
    margin: 0;
    margin: 0.4rem 1rem 0 0;
  }
`;

export const Notification = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 3.2rem;

    button {
      position: absolute;
      top: 2.4rem;
      right: 2.4rem;
      font-size: 0;
      border: none;
      background: transparent;

      svg {
        width: 2.4rem;
        height: 2.4rem;
        transition: color 0.2s;
      }

      &:hover svg {
        color: ${lighten(0.2, theme.colors['gray-900'])};
      }
    }

    header {
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
  `}
`;
