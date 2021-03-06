import { ReactNode, useEffect, useState } from 'react';
import ReactModal from 'react-modal';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
};

export function Modal({
  isOpen,
  setIsOpen,
  children,
}: ModalProps): JSX.Element {
  const [modalStatus, setModalStatus] = useState(isOpen);
  useEffect(() => {
    if (modalStatus !== isOpen) {
      setModalStatus(isOpen);
    }
  }, [isOpen, modalStatus]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      closeTimeoutMS={2000}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          // marginRight: '4rem',
          // marginLeft: '4rem',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '0',
          width: '100%',
          maxWidth: '100rem',
          border: 'none',
          padding: '0',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          paddingLeft: '4px',
          paddingRight: '4px',
        },
      }}
    >
      {children}
    </ReactModal>
  );
}
