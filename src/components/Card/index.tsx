import { useState } from 'react';
import { MdModeEdit, MdDelete } from 'react-icons/md';

import placeHolderAvatar from '../../assets/placeholder-avatar.png';
import { api } from '../../services/api';
import { NaverDatailModal } from '../NaverDatailModal';

import * as S from './styles';

const allowedURLAvatar = /(^https?:\/\/).+(\.jpg|\.jpeg|\.png)$/i;

type NaverDetail = {
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

type Naver = {
  id: string;
  user_id: string;
  name: string;
  url: string;
  job_role: string;
  hasAvatar: boolean;
};

type CardProps = {
  naverData: Naver;
};

export function Card({ naverData }: CardProps): JSX.Element {
  const [isDetailNaver, setIsDetailNaver] = useState(false);
  const [naver, setNaver] = useState<NaverDetail>({} as NaverDetail);

  function toggleModal(): void {
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
        <button type="button">
          <MdDelete />
        </button>

        <button type="button">
          <MdModeEdit />
        </button>
      </div>

      {naver && isDetailNaver && (
        <NaverDatailModal
          isOpen={isDetailNaver}
          setIsOpen={toggleModal}
          naver={naver}
        />
      )}
    </S.Container>
  );
}
