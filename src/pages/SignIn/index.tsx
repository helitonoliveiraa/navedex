import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { getValidationErrors } from '../../utils/validationErros';
import { useAuth } from '../../hooks/naver-auth';
import { useToast } from '../../hooks/toast';

import { Input } from '../../components/Input';
import { Loader } from '../../components/Loader';

import Logo from '../../assets/logo.png';
import * as S from './styles';

type SignInFormData = {
  email: string;
  password: string;
};

export function SignIn(): JSX.Element {
  const [loading, setloading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const history = useHistory();
  const { addToast } = useToast();
  const { signIn } = useAuth();

  async function handleLogin(data: SignInFormData) {
    try {
      setloading(true);
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
        return;
      }

      addToast({
        title: 'Erro na autenticação!',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
      });
    } finally {
      setloading(false);
    }
  }

  return (
    <S.Container ref={formRef} onSubmit={handleLogin}>
      <S.Content>
        <img src={Logo} alt="Nave.rs" />

        <Input name="email" id="email" placeholder="E-mail" />

        <Input
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
