import { Modal, ModalContent } from "@nextui-org/react";

interface ModalPresentationProps {
  isOpen: boolean;
  modalContent: string | React.ReactNode;
  modalFooter?: string | React.ReactNode;
  onOpenChange: () => void;
}

export const ModalPresentation: React.FC<ModalPresentationProps> = ({
  isOpen,
  modalContent,
  onOpenChange,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      radius={"none"}
      size={"sm"}
    >
      <ModalContent>{modalContent}</ModalContent>
    </Modal>
  );
};
