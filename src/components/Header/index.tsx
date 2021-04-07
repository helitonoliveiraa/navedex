import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/naver-auth';

import Logo from '../../assets/logo.png';
import * as S from './styles';

export function Header(): JSX.Element {
  const { signOut } = useAuth();

  return (
    <S.Container>
      <div>
        <Link to="/home">
          <img src={Logo} alt="Nave.rs" />
        </Link>
        <button type="button" onClick={signOut}>
          Sair
        </button>
      </div>
    </S.Container>
  );
}
