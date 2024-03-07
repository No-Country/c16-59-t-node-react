import { Modal, ModalContent } from "@nextui-org/react";

interface ModalPresentationProps{
  isOpen:boolean
  modalContent: string | React.ReactNode
  modalFooter?: string | React.ReactNode
  onOpenChange: ()=>void
}

export const ModalPresentation:React.FC<ModalPresentationProps> = ({isOpen, modalContent, onOpenChange}) =>{
  return(
    <Modal backdrop={"blur"} isOpen={isOpen} onOpenChange={onOpenChange} radius={"none"} shouldBlockScroll> 
        <ModalContent className="overflow-x-hidden">
          {modalContent}
          </ModalContent>
      </Modal>
  )
}