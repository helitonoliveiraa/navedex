import React, {
  // eslint-disable-next-line indent
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

import { api } from '../services/api';

interface User {
  id: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredenctial {
  userEmail: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredenctial) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@navedex:token');
    const user = localStorage.getItem('@navedex:user');

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ userEmail, password }) => {
    const response = await api.post('users/login', {
      email: userEmail,
      password,
    });

    const { token, email, id } = response.data;
    const user = {
      id,
      email,
    };

    console.log(response.data);

    localStorage.setItem('@navedex:token', token);
    localStorage.setItem('@navedex:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({
      token,
      user,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@navedex:token');
    localStorage.removeItem('@navedex:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Auth custom Hook
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an authProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
