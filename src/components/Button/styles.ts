import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 4rem;
    border: none;
    background: ${theme.colors['gray-900']};

    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2.4rem;
    color: ${theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background 0.2s;

    &:hover {
      background: ${lighten(0.1, theme.colors['gray-900'])};
    }
  `}
`;
