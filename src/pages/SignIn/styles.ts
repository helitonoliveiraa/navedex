import styled, { css } from 'styled-components';
import { Form } from '@unform/web';

import { Button } from '../../components/Button';

export const Container = styled(Form)`
  height: 100vh;
  padding: 0 2rem;
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 448px;
    width: 100%;
    padding: 4rem 3.2rem;
    border: 1px solid ${theme.colors['gray-900']};

    img {
      max-width: 23.5rem;
      margin-bottom: 4rem;
      align-self: center;
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
