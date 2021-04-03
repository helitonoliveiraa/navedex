import styled, { css } from 'styled-components';
import { Button } from '../../components/Button';

export const Container = styled.div``;

export const AddButton = styled(Button)`
  max-width: 17.6rem;
`;

export const Content = styled.main`
  ${({ theme }) => css`
    max-width: 1240px;
    height: 8.5rem;
    margin: 4rem auto 0;
    padding: 0 2rem;

    > section {
      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        font-size: 4rem;
        font-weight: 600;
        color: ${theme.colors['gray-900']};
      }
    }
  `}
`;
