import { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles, FormHelpers } from '@unform/core';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import * as Yup from 'yup';

import { getValidationErrors } from '../../utils/validationErros';
import { useNaverData } from '../../hooks/naverData';
import { CreateNewNaver } from '../../types';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { SmallModal } from '../../components/SmallModal';

import * as S from './styles';

type AddFormData = CreateNewNaver;

export function CreateNaver(): JSX.Element {
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { createNewNaver } = useNaverData();

  async function handleCreateNewNaver(
    data: AddFormData,
    { reset }: FormHelpers,
  ): Promise<void> {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        job_role: Yup.string().required('O cargo é obrigatório'),
        birthdate: Yup.string().required('Data de nascimento obrigatória'),
        admission_date: Yup.string().required('Date de admissão obrigatória'),
        project: Yup.string().required('Informe um projeto'),
        url: Yup.string().required('URL da foto é obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      await createNewNaver(data);

      reset();

      setOpenSuccessModal(true);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }

  function closeSuccessModal() {
    setOpenSuccessModal(false);
  }

  const history = useHistory();
  return (
    <>
      <Header />
      <S.Container>
        <Form ref={formRef} onSubmit={handleCreateNewNaver}>
          <div>
            <button type="button" onClick={() => history.goBack()}>
              <MdKeyboardArrowLeft />
            </button>
            <strong>Adicionar Naver</strong>
          </div>

          <S.InputContainer>
            <Input name="name" id="name" placeholder="Nome" />

            <Input name="job_role" id="job_role" placeholder="Cargo" />
          </S.InputContainer>

          <S.InputContainer>
            <Input name="birthdate" id="birthdate" placeholder="Idade" />

            <Input
              name="admission_date"
              id="admission_date"
              placeholder="Tempo de empresa"
            />
          </S.InputContainer>

          <S.InputContainer>
            <Input
              name="project"
              id="project"
              placeholder="Projetos que participou"
            />

            <Input name="url" id="url" placeholder="URL da foto do Naver" />
          </S.InputContainer>

          <S.AddNaverButton type="submit">Salvar</S.AddNaverButton>
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
    </>
  );
}
