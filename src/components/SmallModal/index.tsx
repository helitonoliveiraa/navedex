import { useEffect, useState } from 'react';
import Modal from 'react-modal';

type SmallModalProps = {
  isOpen: boolean;
  setIsOpen: () => void;
  children: React.ReactNode;
};

export function SmallModal({
  isOpen,
  setIsOpen,
  children,
}: SmallModalProps): JSX.Element {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    if (modalStatus !== isOpen) {
      setModalStatus(isOpen);
    }
  }, [isOpen, modalStatus]);

  return (
    <Modal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={isOpen}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#FFFFFF',
          color: '#000000',
          borderRadius: '0',
          width: '100%',
          maxWidth: '59.2rem',
          border: 'none',
          padding: '0',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      {children}
    </Modal>
  );
}
