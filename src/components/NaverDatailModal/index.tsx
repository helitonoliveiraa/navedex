import { MdModeEdit, MdDelete, MdClose } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import {
  formatDistanceBetweenDates,
  formatAge,
  formatDateToPtBR,
} from '../../utils/formatDate';
import { Modal } from '../Modal';

import placeHolderAvatar from '../../assets/placeholder-avatar.png';
import { Naver } from '../../types';

import * as S from './styles';

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
  const history = useHistory();

  const company_time = formatDistanceBetweenDates(naver.admission_date);
  const age = formatAge(naver.birthdate);

  function handleEditNaver(data: Naver) {
    const updateNaverData = {
      ...data,
      admission_date: formatDateToPtBR(naver.admission_date),
      birthdate: formatDateToPtBR(naver.birthdate),
    };

    history.push('/edit-naver', { updateNaverData });
  }

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
            <span>{age}</span>

            <strong>Tempo de empresa</strong>
            <span>{company_time}</span>

            <strong>Projetos que </strong>
            <span>{naver.project}</span>
          </S.Content>

          <S.ButtonsContainer>
            <button type="button">
              <MdDelete />
            </button>

            <button type="button" onClick={() => handleEditNaver(naver)}>
              <MdModeEdit />
            </button>
          </S.ButtonsContainer>
        </div>
      </S.ContentContainer>
    </Modal>
  );
}
