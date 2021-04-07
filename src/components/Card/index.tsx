import { useState } from 'react';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { api } from '../../services/api';
import { validatiteAvatarURL } from '../../utils/validateAvatarURL';

import { useNaverData } from '../../hooks/naverData';
import { useToast } from '../../hooks/toast';

import { NaverDatailModal } from '../NaverDatailModal';
import { SmallModal } from '../SmallModal';
import { Button } from '../Button';
import { Loader } from '../Loader';

import { NaverDetail, Naver } from '../../types';

import placeHolderAvatar from '../../assets/placeholder-avatar.png';
import * as S from './styles';

type CardProps = {
  naverData: Naver;
};

export function Card({ naverData }: CardProps): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [isDetailNaver, setIsDetailNaver] = useState(false);
  const [isDeleteNaver, setIsDeleteNaver] = useState(false);
  const [naver, setNaver] = useState<NaverDetail>({} as NaverDetail);

  const history = useHistory();
  const { DeleteOneNaver } = useNaverData();
  const { addToast } = useToast();

  function toggleModal() {
    setIsDetailNaver(!isDetailNaver);
  }

  async function showOneNaver(id: string) {
    try {
      setLoading(true);
      const response = await api.get<NaverDetail>(`/navers/${id}`);

      if (!response.data) {
        throw new Error();
      }

      const naverResponse = {
        ...response.data,
        hasAvatar: validatiteAvatarURL(response.data.url),
      };

      setNaver(naverResponse);
      toggleModal();
      setLoading(false);
    } catch {
      addToast({
        title: 'Erro!',
        description: 'Ocorreu um erro ao buscar os datalhes do naver.',
      });
    } finally {
      setLoading(false);
    }
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
    <S.Container loading={loading ? 'active' : ''}>
      <button type="button" onClick={() => showOneNaver(naverData.id)}>
        {loading && (
          <Loader
            type="BallTriangle"
            width="4rem"
            height="4rem"
            color="#424242"
          />
        )}
        <img
          src={naverData.hasAvatar ? naverData.url : placeHolderAvatar}
          alt={naverData.name}
        />
        <strong>{naverData.name}</strong>
        <span>{naverData.job_role}</span>
      </button>

      <div>
        <button type="button" onClick={() => setIsDeleteNaver(true)}>
          <S.InfoTooltip title="Deletar naver">
            <MdDelete />
          </S.InfoTooltip>
        </button>

        <button type="button" onClick={() => handleUpdateNaver(naverData)}>
          <S.InfoTooltip title="Editar naver">
            <MdModeEdit />
          </S.InfoTooltip>
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
