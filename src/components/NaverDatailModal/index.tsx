import { MdModeEdit, MdDelete, MdClose } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import {
  formatDistanceBetweenDates,
  formatAge,
  formatDateToPtBR,
} from '../../utils/formatDate';
import { Modal } from '../Modal';
import { Naver } from '../../types';

import placeHolderAvatar from '../../assets/placeholder-avatar.png';
import * as S from './styles';

type NaverDatailModalProps = {
  naver: Naver;
  isOpen: boolean;
  setIsOpen: () => void;
  setIsDeleteNaver: React.Dispatch<boolean>;
};

export function NaverDatailModal({
  naver,
  isOpen,
  setIsOpen,
  setIsDeleteNaver,
}: NaverDatailModalProps): JSX.Element {
  const history = useHistory();

  const company_time = formatDistanceBetweenDates(naver.admission_date);
  const age = formatAge(naver.birthdate);

  function handleUpdateNaver(data: Naver) {
    const updateNaverData = {
      ...data,
      admission_date: formatDateToPtBR(naver.admission_date),
      birthdate: formatDateToPtBR(naver.birthdate),
    };

    history.push('/edit-naver', { updateNaverData });
  }

  function deleteNaver() {
    setIsDeleteNaver(true);
    setIsOpen();
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
            <button type="button" onClick={deleteNaver}>
              <S.InfoTooltip title="Deletar naver">
                <MdDelete />
              </S.InfoTooltip>
            </button>

            <button type="button" onClick={() => handleUpdateNaver(naver)}>
              <S.InfoTooltip title="Editar naver">
                <MdModeEdit />
              </S.InfoTooltip>
            </button>
          </S.ButtonsContainer>
        </div>
      </S.ContentContainer>
    </Modal>
  );
}
