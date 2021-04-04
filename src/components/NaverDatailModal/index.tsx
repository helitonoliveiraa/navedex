import { MdModeEdit, MdDelete, MdClose } from 'react-icons/md';
import { Modal } from '../Modal';

import placeHolderAvatar from '../../assets/placeholder-avatar.png';

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

type NaverDatailModalProps = {
  naver: Naver;
  isOpen: boolean;
  setIsOpen: () => void;
};

export function NaverDatailModal({
  naver,
  isOpen,
  setIsOpen,
}: NaverDatailModalProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <S.ContentContainer>
        <button type="button" onClick={setIsOpen}>
          <MdClose />
        </button>

        <img
          src={naver.hasAvatar ? naver.url : placeHolderAvatar}
          alt={naver.name}
        />

        <div>
          <S.Content>
            <header>{naver.name}</header>
            <span>{naver.job_role}</span>

            <strong>Idade</strong>
            <span>{naver.birthdate}</span>

            <strong>Tempo de empresa</strong>
            <span>{naver.admission_date}</span>

            <strong>Projetos que </strong>
            <span>{naver.project}</span>
          </S.Content>

          <S.ButtonsContainer>
            <button type="button">
              <MdDelete />
            </button>

            <button type="button">
              <MdModeEdit />
            </button>
          </S.ButtonsContainer>
        </div>
      </S.ContentContainer>
    </Modal>
  );
}
