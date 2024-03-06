import { TypeToastify } from "../app/interfaces/toastify";
import { Bounce, toast } from "react-toastify";

export const toastifyTyped = ({
  type,
  message,
}: {
  type: TypeToastify;
  message: string;
}) => {
  return toast[type](message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};
