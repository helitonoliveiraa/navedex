import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { APPEAR_FROM_LEFT, FADE } from '../../constants/animations';

export const Container = styled.header`
  ${({ theme }) => css`
    height: 8.5rem;

    div {
      max-width: 1240px;
      height: 8.5rem;
      margin: 0 auto;
      padding: 0 2rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        max-width: 14.5rem;

        animation: ${APPEAR_FROM_LEFT} 1s ease-in-out;
      }

      button {
        border: none;
        background: transparent;

        animation: ${FADE} 1s ease-in-out;

        font-size: 1.4rem;
        font-weight: 600;
        color: ${theme.colors['black-1000']};

        transition: color 0.2s;

        &:hover {
          color: ${lighten(0.3, theme.colors['black-1000'])};
        }
      }
    }
  `}
`;
