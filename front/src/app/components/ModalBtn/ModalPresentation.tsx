import { Modal, ModalContent } from "@nextui-org/react";

interface ModalPresentationProps{
  isOpen:boolean
  modalContent: string | React.ReactNode
  onOpenChange: ()=>void
}

export const ModalPresentation:React.FC<ModalPresentationProps> = ({isOpen, modalContent, onOpenChange}) =>{
  return(
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <div className="flex flex-col gap-1">
        <ModalContent>
          {modalContent}
          </ModalContent>
      </div>
        
      </Modal>
  )
}