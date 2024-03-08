import Image from "next/image";
import { IMAGE_LOGIN } from "../../constants/data";

export const ImageLoginTemp = () => {
  return (
    <Image
      src={IMAGE_LOGIN}
      alt="Login"
      className="rounded-full size-8"
      width={200}
      height={200}
    />
  );
};
