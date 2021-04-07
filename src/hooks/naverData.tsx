import {
  // eslint-disable-next-line indent
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { api } from '../services/api';
import { formatDateToPtBR } from '../utils/formatDate';
import { validatiteAvatarURL } from '../utils/validateAvatarURL';
import { useToast } from './toast';

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

type NaverDataProviderProps = {
  children: React.ReactNode;
};

const NaverContext = createContext<NaverContextData>({} as NaverContextData);

function NaverDataProvider({ children }: NaverDataProviderProps): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [navers, setNavers] = useState<Naver[]>([]);

  const { addToast } = useToast();

  useEffect(() => {
    async function loadedNavers() {
      try {
        setLoading(true);
        const response = await api.get<Naver[]>('/navers');

        const naversResponse = response.data.map(naver => ({
          ...naver,
          hasAvatar: validatiteAvatarURL(naver.url),
          admission_date: formatDateToPtBR(naver.admission_date),
          birthdate: formatDateToPtBR(naver.birthdate),
        }));

        setNavers(naversResponse);
      } catch {
        addToast({
          title: 'Erro!',
          description: 'Ocorreu um erro ao buscar os navers.',
        });
      } finally {
        setLoading(false);
      }
    }

    loadedNavers();
  }, [addToast]);

  async function createNewNaver(data: Naver) {
    const response = await api.post('/navers', data);

    const createdNaver = {
      ...response.data,
      hasAvatar: validatiteAvatarURL(response.data.url),
      admission_date: formatDateToPtBR(response.data.admission_date),
      birthdate: formatDateToPtBR(response.data.birthdate),
    };

    setNavers(prevState => [...prevState, createdNaver]);
  }

  async function DeleteOneNaver(id: string) {
    try {
      const response = await api.delete(`/navers/${id}`);

      if (!response.data) {
        throw new Error();
      }

      setNavers(navers.filter(naver => naver.id !== id));
      setIsDeleted(true);
    } catch {
      addToast({
        title: 'Erro!',
        description: 'Ocorreu um erro ao deletar o naver.',
      });
    }
  }

  async function updateNaver(naver: NaverUpdate) {
    const {
      job_role,
      admission_date,
      birthdate,
      name,
      project,
      url,
    } = naver;

    const response = await api.put<NaverUpdate>(`/navers/${naver.id}`, {
      job_role,
      admission_date,
      birthdate,
      name,
      project,
      url,
    });

    const updatedNaver = {
      ...response.data,
      hasAvatar: validatiteAvatarURL(response.data.url),
      admission_date: formatDateToPtBR(response.data.admission_date),
      birthdate: formatDateToPtBR(response.data.birthdate),
    };

    setNavers(
      navers.map(n => (n.id === naver.id ? { ...n, ...updatedNaver } : n)),
    );
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
}

// Naver custom Hook
function useNaverData(): NaverContextData {
  const context = useContext(NaverContext);

  return context;
}

export { NaverDataProvider, useNaverData };
