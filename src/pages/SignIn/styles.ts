import styled, { css } from 'styled-components';
import { Form } from '@unform/web';
import { lighten } from 'polished';

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

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 3.2rem;
      border: none;

      height: 4rem;
      background: ${theme.colors['gray-900']};
      color: ${theme.colors.white};

      transition: background 0.2s;

      &:hover {
        background: ${lighten(0.1, theme.colors['gray-900'])};
      }
    }
  `}
`;
