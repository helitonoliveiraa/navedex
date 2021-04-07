import { useEffect } from 'react';
import { MdHighlightOff, MdReportProblem } from 'react-icons/md';

import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

type ToastProps = {
  message: ToastMessage;
  style: object;
}

export function Toast({ message, style }: ToastProps): JSX.Element {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container style={style}>
      <MdReportProblem size={24} />

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type="button" onClick={() => removeToast(message.id)}>
        <MdHighlightOff size={18} />
      </button>
    </Container>
  );
}
