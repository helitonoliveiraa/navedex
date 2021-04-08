import { createGlobalStyle } from 'styled-components';
import { FADE } from '../constants/animations';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
  font-size: 62.5%; /* 1rem to equal 10px */

  @media (max-width: 1080px) {
    & {
      font-size: 56.25%; /* 0.9rem to equal 9px */
    }
  }

  @media (max-width: 1024px) and (height: 1366px) {
    & {
      font-size: 62.5%; /* 1rem to equal 10px */
    }
  }

  @media (max-width: 720px) {
    & {
      font-size: 50%; /* 0.8rem to equal 8px */
    }
  }

  body {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors['gray-900']};
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }



  body, input, textarea, select, button {
    font: 400 1.6rem "Montserrat", sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  .ReactModal__Overlay--after-open {
    animation: ${FADE} 1s ease-in-out;
  }

  .ReactModal__Overlay--before-close {
    animation: ${FADE} 1s ease-in-out;
  }
}
`;
