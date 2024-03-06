import { IconHuerta } from "@/app/components";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";

export const ModalOpenPayment = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Modal
      backdrop={"opaque"}
      isOpen={isOpen}
      placement={"center"}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      hideCloseButton
      radius="none"
      classNames={{
        body: "flex flex-col justify-center items-center gap-0 m-auto pb-20 w-[cal(100vw - 10rem)]",
        header: "bg-primary-yellow",
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader></ModalHeader>
            <ModalBody>
              <div className="[&_svg]:size-60">
                <IconHuerta />
              </div>
              <p>Estás a un paso de finalizar tu compra...</p>
              <p className="font-bold">No cierres esta página.</p>
              <Progress
                size="sm"
                isIndeterminate
                aria-label="Loading..."
                className="max-w-md"
                color="warning"
              />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
