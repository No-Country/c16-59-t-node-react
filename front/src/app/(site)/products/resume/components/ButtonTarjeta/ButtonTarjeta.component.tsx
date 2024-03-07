import Image from "next/image";
import style from "./ButtonTarjeta.module.css";
import clsx from "clsx";

interface ButtonTarjetaProps {
  onClick: () => void;
  disabled: boolean;
}

export const ButtonTarjeta: React.FC<ButtonTarjetaProps> = ({
  onClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(style.buttonMod, disabled && style.disabledButton)}
      onClick={onClick}
    >
      <Image
        className="max-w-none object-contain h-full p-1"
        src="https://s3-alpha-sig.figma.com/img/0d63/3cb7/cdbf7788ea549041443554057b1e4159?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R-t0MBDQtq8q-fjWSDG9s2c9h3Ks7rR5np-y0rDK60STdgI2Iwxqx-kvpzCE9Ew4fcYLUo4Lk8qOC-rwcVCjzbD56RGQtAI43GMHRtk0jea4YV6qggKfb25o4hhtDW0HAO4LBpnvwbvermDPntrmPPM5gNGcxaED6IugqLuk0xoD56p0f04Kl3IwgG3UY6R2w-iln2XgQv37ipFq7tCrTuRcrbC-ZeVmL1iDybySEJ1I0Gi1UWl55Sl0hOL4F8Bxp077hGle3YmsxBAyxvSXMIzH82mZ4SC5ISq4~g6b7qjwkF6HUtcKqsw75Hq7Kx73FrmyHr6Tvng9A03kglbX2g__"
        alt="tarjetadebito"
        width={50}
        height={50}
      />
      <span className={style.now}>NOW!</span>
      <span className={style.play}>Tarjeta de Débito/Credito</span>
    </button>
  );
};
