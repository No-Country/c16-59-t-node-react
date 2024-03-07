import { Modal, ModalContent } from "@nextui-org/react";
import clsx from "clsx";
import { defaultModalContent } from "./classModalPresentation";

interface ModalPresentationProps{
  isOpen:boolean
  modalContent: string | React.ReactNode
  modalFooter?: string | React.ReactNode
  onOpenChange: ()=>void
}

export const ModalPresentation:React.FC<ModalPresentationProps> = ({isOpen, modalContent, onOpenChange}) =>{
  return(
    <Modal backdrop={"blur"} isOpen={isOpen} onOpenChange={onOpenChange} radius={"none"} shouldBlockScroll size="4xl" className={clsx(defaultModalContent)}> 
        <ModalContent>
          {modalContent}
          </ModalContent>
      </Modal>
  )
}