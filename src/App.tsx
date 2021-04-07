import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';
import { AuthProvider } from './hooks/naver-auth';
import { ToastProvider } from './hooks/toast';

import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes />
          </AuthProvider>
          <GlobalStyle />
        </BrowserRouter>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
