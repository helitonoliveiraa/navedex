import { createContext, useCallback, useContext, useState } from 'react';

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
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps): JSX.Element {
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
}

// Auth custom Hook
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
