import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { getValidationErrors } from '../../utils/validationErros';
import { useAuth } from '../../hooks/naver-auth';

import Logo from '../../assets/logo.png';
import { Input } from '../../components/Input';
import { Loader } from '../../components/Loader';

import * as S from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

export function SignIn(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();
  const { signIn, loading } = useAuth();

  async function handleLogin(data: SignInFormData) {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail é obrigatório'),
        password: Yup.string().required('Senha é obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      await signIn({
        userEmail: data.email,
        password: data.password,
      });

      history.push('/home');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }

  return (
    <S.Container ref={formRef} onSubmit={handleLogin}>
      <S.Content>
        <img src={Logo} alt="Nave.rs" />

        <Input name="email" id="email" placeholder="E-mail" />

        <Input
          containerStyle={{ marginTop: 32 }}
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
        />

        <S.SignInButton type="submit">
          {loading && <Loader width="2rem" height="2rem" />}
          Entrar
        </S.SignInButton>
      </S.Content>
    </S.Container>
  );
}
