import styled from 'styled-components';
import { animated } from 'react-spring';
import { lighten } from 'polished';

export const Container = styled(animated.div)`
  position: relative;
  display: flex;

  width: 36rem;
  padding: 1rem 3rem 1.6rem 1.6rem;
  box-shadow: 0.2rem 0.2rem 0.8rem rgba(0, 0, 0, 0.2);

  background: ${({ theme }) => lighten(0.37, theme.colors['red-100'])};
  color: ${({ theme }) => theme.colors['red-100']};

  & + div {
    margin-top: 0.8rem;
  }

  > svg {
    margin: 0 1rem 0 0;
  }

  div {
    flex: 1;

    P {
      margin-top: 0.4rem;
      font-size: 1.4rem;
      opacity: 0.8;
      line-height: 2rem;
    }
  }

  button {
    position: absolute;
    top: 1rem;
    right: 1.6rem;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
