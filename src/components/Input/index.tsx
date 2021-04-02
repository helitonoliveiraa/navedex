import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export function Input({
  name,
  id,
  icon: Icon,
  ...rest
}: InputProps): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  // const error = 'true';

  const inputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line prettier/prettier
  const {
    fieldName, registerField, defaultValue, error,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <>
      <label htmlFor={id}>E-mail</label>
      <Container
        isErrored={!!error}
        isFocused={isFocused}
        isFilled={isFilled}
        data-testid="input-container"
      >
        {Icon && <Icon size="2rem" />}
        <input
          {...rest}
          id={id}
          ref={inputRef}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />

        {error && (
          <Error title={error}>
            <FiAlertCircle size="2rem" />
          </Error>
        )}
      </Container>
    </>
  );
}

export default Input;
