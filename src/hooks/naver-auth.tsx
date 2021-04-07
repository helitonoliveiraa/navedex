import React, {
  // eslint-disable-next-line indent
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

import { api } from '../services/api';

type User = {
  id: string;
  email: string;
};

type AuthState = {
  token: string;
  user: User;
};

type SignInCredenctial = {
  userEmail: string;
  password: string;
};

type AuthContextData = {
  user: User;
  signIn: (credentials: SignInCredenctial) => Promise<void>;
  signOut: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

    const response = await api.post('users/login', {
      email: userEmail,
      password,
    });

    const { token, email, id } = response.data;
    const user = {
      id,
      email,
    };

    localStorage.setItem('@navedex:token', token);
    localStorage.setItem('@navedex:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({
      token,
      user,
    });

    setLoading(false);
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
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Auth custom Hook
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
