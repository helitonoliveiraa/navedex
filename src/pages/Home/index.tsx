import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

import * as S from './styles';

const allowedURLAvatar = /(^https?:\/\/).+(\.jpg|\.jpeg|\.png)$/i;

type Naver = {
  id: string;
  user_id: string;
  name: string;
  birthdate: string;
  job_role: string;
  url: string;
  project: string;
  admission_date: string;
  hasAvatar: boolean;
};

export function Home(): JSX.Element {
  const [navers, setNavers] = useState<Naver[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    async function loadedNavers() {
      const response = await api.get<Naver[]>('/navers');

      const naversResponse = response.data.map(naver => ({
        ...naver,
        hasAvatar: !!allowedURLAvatar.exec(naver.url),
      }));

      setNavers(naversResponse);
      console.log(naversResponse);
    }

    loadedNavers();
  }, []);

  return (
    <S.Container>
      <Header />

      <S.Content>
        <S.ContentHeader>
          <strong>Navers</strong>
          <S.AddButton onClick={() => history.push('/add-naver')}>
            Adicionar Naver
          </S.AddButton>
        </S.ContentHeader>

        <S.CardContainer>
          {navers.map(naver => (
            <Card naver={naver} key={naver.id} />
          ))}
        </S.CardContainer>
      </S.Content>
    </S.Container>
  );
}
