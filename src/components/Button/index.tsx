import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  children: React.ReactNode;
};

export function Button({ children, ...rest }: ButtonProps): JSX.Element {
  return (
    <S.Container type="button" {...rest}>
      {children}
    </S.Container>
  );
}
