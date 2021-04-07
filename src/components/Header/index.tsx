import Logo from '../../assets/logo.png';
import { useAuth } from '../../hooks/naver-auth';

import * as S from './styles';

export function Header(): JSX.Element {
  const { signOut } = useAuth();

  return (
    <S.Container>
      <div>
        <img src={Logo} alt="Nave.rs" />
        <button type="button" onClick={signOut}>
          Sair
        </button>
      </div>
    </S.Container>
  );
}
