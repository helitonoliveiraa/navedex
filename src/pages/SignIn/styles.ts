import styled, { css } from 'styled-components';
import { Form } from '@unform/web';

import { Button } from '../../components/Button';
import { APPEAR_FROM_TOP, FADE } from '../../constants/animations';

export const Container = styled(Form)`
  height: 100vh;
  padding: 0 2rem;
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${FADE} 1s ease-in-out;
`;

export const Content = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 44.8rem;
    width: 100%;
    padding: 4rem 3.2rem;
    border: 1px solid ${theme.colors['gray-900']};

    img {
      max-width: 23.5rem;
      margin-bottom: 4rem;
      align-self: center;

      animation: ${APPEAR_FROM_TOP} 1s ease-in-out;

      @media (max-width: 540px) {
        max-width: 20rem;
      }

      @media (max-width: 340px) {
        max-width: 16rem;
      }
    }
  `}
`;

export const SignInButton = styled(Button)`
  margin-top: 3.2rem;
  height: 4rem;

  display: flex;
  align-items: center;

  svg {
    margin: 0;
    margin: 0.4rem 1rem 0 0;
  }
`;
