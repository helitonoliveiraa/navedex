import React, {
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import { v4 as uuid } from 'uuid';

import { ToastContainer } from '../components/ToastContainer';

export type ToastMessage ={
  id: string;
  title: string;
  description?: string;
}

type ToastContextData = {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
};

type ToastProviderProps = {
  children: React.ReactNode;
};

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

function ToastProvider({ children }: ToastProviderProps): JSX.Element {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        title,
        description,
      };

      setMessages(state => [...state, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
}

// Toast custom hook
function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  return context;
}

export { ToastProvider, useToast };
