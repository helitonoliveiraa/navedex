import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

import * as S from './styles';
import { useNaverData } from '../../hooks/naverData';

export function Home(): JSX.Element {
  const { navers } = useNaverData();
  const history = useHistory();

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
            <Card naverData={naver} key={naver.id} />
          ))}
        </S.CardContainer>
      </S.Content>
    </S.Container>
  );
}
