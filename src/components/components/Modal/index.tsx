import { ReactNode } from 'react';
import Modal from 'react-modal';

interface ReactModalProps {
  bgColor?: string;
  children: ReactNode;
  isOpen: boolean;
  overflow?: string;
  closeModal: () => void;
}

export default function CustomModal({ children, isOpen, closeModal, bgColor }: ReactModalProps) {
  return (
    <Modal
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      isOpen={isOpen}
      style={customStyles(bgColor)}
      onRequestClose={() => closeModal()}
    >
      {children}
    </Modal>
  );
}

const customStyles = (bgColor?: string) => ({
  overlay: {
    backgroundColor: bgColor || 'rgba(0,0,0,0.07)',
    zIndex: 2,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: 0,
    transform: 'translate(-50%, -50%)',
    border: 'none',
  },
});
