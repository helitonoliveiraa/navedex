import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';
import { AuthProvider } from './hooks/naver-auth';

import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
