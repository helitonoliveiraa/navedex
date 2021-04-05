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
  DeleteOneNaver: (id: string) => Promise<void>;
  isDeleted: boolean;
  setIsDeleted: React.Dispatch<boolean>;
};

const allowedURLAvatar = /(^https?:\/\/).+(\.jpg|\.jpeg|\.png)$/i;

const NaverContext = createContext<NaverContextData>({} as NaverContextData);

const NaverDataProvider: React.FC = ({ children }) => {
  const [isDeleted, setIsDeleted] = useState(false);
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

  async function createNewNaver(data: CreateNewNaver) {
    const response = await api.post('/navers', data);

    setNavers(prevState => [...prevState, response.data]);
  }

  async function DeleteOneNaver(id: string): Promise<void> {
    await api.delete(`/navers/${id}`);

    setNavers(navers.filter(naver => naver.id !== id));
    setIsDeleted(true);
  }

  return (
    <NaverContext.Provider
      value={{
        navers,
        createNewNaver,
        DeleteOneNaver,
        isDeleted,
        setIsDeleted,
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
