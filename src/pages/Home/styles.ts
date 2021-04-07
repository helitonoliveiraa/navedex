import { lighten } from 'polished';
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

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(100% - 17.5rem);
  width: 100%;
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
