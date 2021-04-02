import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      'gray-500': string;
      'gray-800': string;
      'gray-900': string;
    };
  }
}
