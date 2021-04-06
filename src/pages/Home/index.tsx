import { useHistory } from 'react-router-dom';

import { MdClose } from 'react-icons/md';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

import { useNaverData } from '../../hooks/naverData';

import { SmallModal } from '../../components/SmallModal';
import * as S from './styles';

export function Home(): JSX.Element {
  const { navers, isDeleted, setIsDeleted } = useNaverData();

  const history = useHistory();

  function closeNotification() {
    setIsDeleted(false);
  }

  return (
    <S.Container>
      <Header />

      <S.Content>
        <S.ContentHeader>
          <strong>Navers</strong>
          <S.AddButton onClick={() => history.push('/create-naver')}>
            Adicionar Naver
          </S.AddButton>
        </S.ContentHeader>

        <S.CardContainer>
          {navers.map(naver => (
            <Card naverData={naver} key={naver.id} />
          ))}
        </S.CardContainer>
      </S.Content>
      {isDeleted && (
        <SmallModal isOpen={isDeleted} setIsOpen={closeNotification}>
          <S.Notification>
            <button type="button" onClick={closeNotification}>
              <MdClose />
            </button>
            <header>Naver excluído</header>

            <span>Naver excluído com sucesso!</span>
          </S.Notification>
        </SmallModal>
      )}
    </S.Container>
  );
}
