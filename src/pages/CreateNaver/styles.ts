import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { Button } from '../../components/Button';
import { APPEAR_FROM_RIGHT, FADE } from '../../constants/animations';

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

        a {
          display: flex;
          align-items: center;

          svg {
            width: 4rem;
            height: 4rem;
            color: ${theme.colors['black-1000']};

            animation: ${FADE} 1s ease-in-out;
            transition: color 0.2s;
          }

          &:hover svg {
            color: ${lighten(0.2, theme.colors['gray-900'])};
          }
        }

        strong {
          font-size: 2.4rem;
          font-weight: 600;
          margin-left: 1.6rem;
          color: ${theme.colors['gray-900']};
          text-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

          animation: ${APPEAR_FROM_RIGHT} 1s ease-in-out;
        }

        @media (max-width: 500px) {
          a {
            svg {
              width: 3rem;
              height: 3rem;
            }
          }

          strong {
            font-size: 2rem;
          }
        }
      }
    }
  `}
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;

  animation: ${FADE} 1s ease-in-out;

  @media (max-width: 460px) {
    flex-direction: column;
  }
`;

export const AddNaverButton = styled(Button)`
  max-width: 17.6rem;
  margin-left: auto;

  animation: ${FADE} 1s ease-in-out;

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
