import React, {
  // eslint-disable-next-line indent
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { api } from '../services/api';

type Naver = {
  id: string;
  user_id: string;
  name: string;
  job_role: string;
  url: string;
  hasAvatar: boolean;
};

type NaverContextData = {
  navers: Naver[];
};

const allowedURLAvatar = /(^https?:\/\/).+(\.jpg|\.jpeg|\.png)$/i;

const NaverContext = createContext<NaverContextData>({} as NaverContextData);

const NaverDataProvider: React.FC = ({ children }) => {
  const [navers, setNavers] = useState<Naver[]>([]);
  useEffect(() => {
    async function loadedNavers() {
      const response = await api.get<Naver[]>('/navers');

      const naversResponse = response.data.map(naver => ({
        ...naver,
        hasAvatar: !!allowedURLAvatar.exec(naver.url),
      }));

      setNavers(naversResponse);
    }

    loadedNavers();
  }, []);

  return (
    <NaverContext.Provider
      value={{
        navers,
      }}
    >
      {children}
    </NaverContext.Provider>
  );
};

// Auth custom Hook
function useNaverData(): NaverContextData {
  const context = useContext(NaverContext);

  return context;
}

export { NaverDataProvider, useNaverData };
