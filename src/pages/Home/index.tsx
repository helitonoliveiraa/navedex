import { Header } from '../../components/Header';

import * as S from './styles';

export function Home(): JSX.Element {
  return (
    <S.Container>
      <Header />

      <S.Content>
        <section>
          <strong>Navers</strong>
          <S.AddButton>Adicionar Naver</S.AddButton>
        </section>
      </S.Content>
    </S.Container>
  );
}
