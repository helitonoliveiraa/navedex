import { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles, FormHelpers } from '@unform/core';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import * as Yup from 'yup';

import { getValidationErrors } from '../../utils/validationErros';

import { useNaverData } from '../../hooks/naverData';
import { useToast } from '../../hooks/toast';
import { Naver } from '../../types';

import { Input } from '../../components/Input';
import { SmallModal } from '../../components/SmallModal';
import { Loader } from '../../components/Loader';

import * as S from './styles';

type AddFormData = Naver;

export function CreateNaver(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { createNewNaver } = useNaverData();

  async function handleCreateNewNaver(
    data: AddFormData,
    { reset }: FormHelpers,
  ): Promise<void> {
    try {
      setLoading(true);
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        job_role: Yup.string().required('O cargo é obrigatório'),
        birthdate: Yup.string().required('Obrigatório. (apenas números)'),
        admission_date: Yup.string().required('Obrigatório. (apenas números)'),
        project: Yup.string().required('Informe um projeto'),
        url: Yup.string().required('URL da foto é obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });
      await createNewNaver(data);

      reset();

      setOpenSuccessModal(true);
      setLoading(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        return;
      }

      addToast({
        title: 'Erro na criação!',
        description: 'Ocorreu um erro ao criar o naver, tente novamente.',
      });
    } finally {
      setLoading(false);
    }
  }

  function closeSuccessModal() {
    setOpenSuccessModal(false);
  }

  return (
    <S.Container>
      <Form ref={formRef} onSubmit={handleCreateNewNaver}>
        <div>
          <Link to="/home">
            <MdKeyboardArrowLeft />
          </Link>
          <strong>Adicionar Naver</strong>
        </div>

        <S.InputGroup>
          <Input name="name" id="name" placeholder="Nome" />

          <Input name="job_role" id="job_role" placeholder="Cargo" />
        </S.InputGroup>

        <S.InputGroup>
          <Input
            name="birthdate"
            id="birthdate"
            placeholder="Idade"
            mask="date"
            maxLength={10}
          />

          <Input
            name="admission_date"
            id="admission_date"
            placeholder="Tempo de empresa"
            mask="date"
            maxLength={10}
          />
        </S.InputGroup>

        <S.InputGroup>
          <Input
            name="project"
            id="project"
            placeholder="Projetos que participou"
          />

          <Input name="url" id="url" placeholder="URL da foto do Naver" />
        </S.InputGroup>

        <S.AddNaverButton type="submit">
          {loading && <Loader />}
          Salvar
        </S.AddNaverButton>
      </Form>

      {openSuccessModal && (
        <SmallModal isOpen={openSuccessModal} setIsOpen={closeSuccessModal}>
          <S.Notification>
            <button type="button" onClick={closeSuccessModal}>
              <MdClose />
            </button>
            <header>Naver criado</header>

            <span>Naver criado com sucesso!</span>
          </S.Notification>
        </SmallModal>
      )}
    </S.Container>
  );
}
