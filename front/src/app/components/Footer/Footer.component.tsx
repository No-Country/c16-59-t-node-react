import { clientService, contact, copyright, footerContainer } from "./classFooter";

export const Footer = () => {
  return (
    <div className={footerContainer}>
      <div className={clientService}>
        <strong className="text-black">SERVICIO AL CLIENTE</strong>
      </div>
      <div className={copyright}>
        <span>© La Huerta 2024. All Rights Reserved.</span>
      </div >
      <div className={contact}>
        <strong className="text-black">CONTÁCTANOS</strong>
      </div>
    </div>
  );
};