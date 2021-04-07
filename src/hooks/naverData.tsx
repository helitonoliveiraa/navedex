import React, {
  // eslint-disable-next-line indent
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { api } from '../services/api';
import { formatDateToPtBR } from '../utils/formatDate';

import { Naver, NaverUpdate } from '../types';

type NaverContextData = {
  navers: Naver[];
  isDeleted: boolean;
  setIsDeleted: React.Dispatch<boolean>;
  updateNaver: (data: Naver) => Promise<void>;
  DeleteOneNaver: (id: string) => Promise<void>;
  createNewNaver: (data: Naver) => Promise<void>;
  loading: boolean;
};

const allowedURLAvatar = /(^https?:\/\/).+(\.jpg|\.jpeg|\.png)$/i;

const NaverContext = createContext<NaverContextData>({} as NaverContextData);

const NaverDataProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [navers, setNavers] = useState<Naver[]>([]);
  useEffect(() => {
    async function loadedNavers() {
      const response = await api.get<Naver[]>('/navers');

      const naversResponse = response.data.map(naver => ({
        ...naver,
        hasAvatar: !!allowedURLAvatar.exec(naver.url),
        admission_date: formatDateToPtBR(naver.admission_date),
        birthdate: formatDateToPtBR(naver.birthdate),
      }));

      setNavers(naversResponse);
    }

    loadedNavers();
  }, []);

  async function createNewNaver(data: Naver) {
    setLoading(true);
    const response = await api.post('/navers', data);

    const createdNaver = {
      ...response.data,
      hasAvatar: !!allowedURLAvatar.exec(response.data.url),
      admission_date: formatDateToPtBR(response.data.admission_date),
      birthdate: formatDateToPtBR(response.data.birthdate),
    };

    setNavers(prevState => [...prevState, createdNaver]);
    setLoading(false);
  }

  async function DeleteOneNaver(id: string): Promise<void> {
    await api.delete(`/navers/${id}`);

    setNavers(navers.filter(naver => naver.id !== id));
    setIsDeleted(true);
  }

  async function updateNaver(naver: NaverUpdate): Promise<void> {
    setLoading(true);
    const response = await api.put<NaverUpdate>(`/navers/${naver.id}`, {
      job_role: naver.job_role,
      admission_date: naver.admission_date,
      birthdate: naver.birthdate,
      name: naver.name,
      project: naver.project,
      url: naver.url,
    });

    const updatedNaver = {
      ...response.data,
      hasAvatar: !!allowedURLAvatar.exec(response.data.url),
      admission_date: formatDateToPtBR(response.data.admission_date),
      birthdate: formatDateToPtBR(response.data.birthdate),
    };

    setNavers(
      navers.map(n => (n.id === naver.id ? { ...n, ...updatedNaver } : n)),
    );
    setLoading(false);
  }

  return (
    <NaverContext.Provider
      value={{
        navers,
        updateNaver,
        createNewNaver,
        DeleteOneNaver,
        isDeleted,
        setIsDeleted,
        loading,
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
