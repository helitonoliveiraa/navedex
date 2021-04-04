import { useState } from 'react';
import { MdModeEdit, MdDelete } from 'react-icons/md';

import placeHolderAvatar from '../../assets/placeholder-avatar.png';
import { NaverDatailModal } from '../NaverDatailModal';

import * as S from './styles';

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

type CardProps = {
  naver: Naver;
};

export function Card({ naver }: CardProps): JSX.Element {
  const [isDetailNaver, setIsDetailNaver] = useState(false);

  function toggleModal(): void {
    setIsDetailNaver(!isDetailNaver);
  }

  return (
    <S.Container>
      <button type="button" onClick={toggleModal}>
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

      {isDetailNaver && (
        <NaverDatailModal
          isOpen={isDetailNaver}
          setIsOpen={toggleModal}
          naver={naver}
        />
      )}
    </S.Container>
  );
}
