import React, {
  // eslint-disable-next-line indent
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { api } from '../services/api';

import { CreateNewNaver } from '../types';

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
  createNewNaver: (data: CreateNewNaver) => Promise<void>;
  handleDeleteOneNaver: (id: string) => Promise<void>;
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

  async function handleDeleteOneNaver(id: string): Promise<void> {
    const response = await api.delete(`/navers/${id}`);
    console.log(id);
    setNavers(response.data);
  }

  async function createNewNaver(data: CreateNewNaver) {
    const response = await api.post('/navers', data);

    setNavers(prevState => [...prevState, response.data]);
  }

  return (
    <NaverContext.Provider
      value={{
        navers,
        createNewNaver,
        handleDeleteOneNaver,
      }}
    >
      {children}
    </NaverContext.Provider>
  );
};

// Naver custom Hook
function useNaverData(): NaverContextData {
  const context = useContext(NaverContext);

  return context;
}

export { NaverDataProvider, useNaverData };
