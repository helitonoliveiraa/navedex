import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MdModeEdit, MdDelete } from 'react-icons/md';

import { api } from '../../services/api';
import { Header } from '../../components/Header';

import placeHolderAvatar from '../../assets/placeholder-avatar.png';

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
            <S.Card key={naver.id}>
              <button type="button">
                <img
                  src={naver.hasAvatar ? naver.url : placeHolderAvatar}
                  alt={naver.name}
                />
                <strong>{naver.name}</strong>
                <span>{naver.job_role}</span>
              </button>

              <div>
                <button type="button">
                  <MdDelete />
                </button>

                <button type="button">
                  <MdModeEdit />
                </button>
              </div>
            </S.Card>
          ))}
        </S.CardContainer>
      </S.Content>
    </S.Container>
  );
}
