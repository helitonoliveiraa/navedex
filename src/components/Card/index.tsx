import { useState } from 'react';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { api } from '../../services/api';

import placeHolderAvatar from '../../assets/placeholder-avatar.png';
import { useNaverData } from '../../hooks/naverData';
import { NaverDatailModal } from '../NaverDatailModal';
import { SmallModal } from '../SmallModal';
import { Button } from '../Button';

import { NaverDetail, Naver } from '../../types';

import * as S from './styles';

const allowedURLAvatar = /(^https?:\/\/).+(\.jpg|\.jpeg|\.png)$/i;

type CardProps = {
  naverData: Naver;
};

export function Card({ naverData }: CardProps): JSX.Element {
  const [isDetailNaver, setIsDetailNaver] = useState(false);
  const [isDeleteNaver, setIsDeleteNaver] = useState(false);
  const [naver, setNaver] = useState<NaverDetail>({} as NaverDetail);

  const history = useHistory();

  const { DeleteOneNaver } = useNaverData();
  function toggleModal() {
    setIsDetailNaver(!isDetailNaver);
  }

  async function showOneNaver(id: string): Promise<void> {
    const response = await api.get<NaverDetail>(`/navers/${id}`);

    const naverResponse = {
      ...response.data,
      hasAvatar: !!allowedURLAvatar.exec(response.data.url),
    };

    setNaver(naverResponse);
    toggleModal();
  }

  function closeSmallModal() {
    setIsDeleteNaver(false);
  }

  function handleDeleteNaver(id: string) {
    DeleteOneNaver(id);
    closeSmallModal();
  }

  function handleUpdateNaver(updateNaverData: Naver) {
    history.push('/edit-naver', { updateNaverData });
  }

  return (
    <S.Container>
      <button type="button" onClick={() => showOneNaver(naverData.id)}>
        <img
          src={naverData.hasAvatar ? naverData.url : placeHolderAvatar}
          alt={naverData.name}
        />
        <strong>{naverData.name}</strong>
        <span>{naverData.job_role}</span>
      </button>

      <div>
        <button type="button" onClick={() => setIsDeleteNaver(true)}>
          <MdDelete />
        </button>

        <button type="button" onClick={() => handleUpdateNaver(naverData)}>
          <MdModeEdit />
        </button>
      </div>

      {isDeleteNaver && (
        <SmallModal isOpen={isDeleteNaver} setIsOpen={closeSmallModal}>
          <S.Popup>
            <strong>Excluir Naver</strong>

            <span>Tem certeza que deseja excluir este Naver?</span>

            <div>
              <Button onClick={closeSmallModal}>Cancelar</Button>

              <Button onClick={() => handleDeleteNaver(naverData.id)}>
                Deletar
              </Button>
            </div>
          </S.Popup>
        </SmallModal>
      )}

      {naver && isDetailNaver && (
        <NaverDatailModal
          isOpen={isDetailNaver}
          setIsOpen={toggleModal}
          naver={naver}
          setIsDeleteNaver={setIsDeleteNaver}
        />
      )}
    </S.Container>
  );
}
