import { useRef } from 'react';
import { FormHandles } from '@unform/core';

import Logo from '../../assets/logo.png';
import Input from '../../components/Input';

import * as S from './styles';

export function SignIn(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  function handleSignIn() {
    console.log('signIn');
  }

  return (
    <S.Container ref={formRef} onSubmit={handleSignIn}>
      <S.Content>
        <img src={Logo} alt="Nave.rs" />

        <Input name="email" id="email" placeholder="E-mail" />

        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
        />

        <button type="button">Entrar</button>
      </S.Content>
    </S.Container>
  );
}
