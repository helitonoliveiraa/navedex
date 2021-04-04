import { Modal } from '../Modal';

type NotificationModalProps = {
  isOpen: boolean;
  setIsOpen: () => void;
  children: React.ReactNode;
};

export function NotificationModal({
  isOpen,
  setIsOpen,
  children,
}: NotificationModalProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1>Notificação</h1>
    </Modal>
  );
}
