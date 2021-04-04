import styled, { css } from 'styled-components';
import { Button } from '../../components/Button';

export const Container = styled.div``;

export const AddButton = styled(Button)`
  max-width: 17.6rem;
`;

export const Content = styled.main`
  max-width: 1240px;
  margin: 4rem auto 0;
  padding: 0 2rem;
  height: calc(100vh - 12.5rem);
`;

export const ContentHeader = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 4rem;
      font-weight: 600;
      color: ${theme.colors['gray-900']};
    }
  `}
`;

export const CardContainer = styled.section`
  margin: 3.2rem -1.3rem 0;
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  flex-wrap: wrap;
`;
