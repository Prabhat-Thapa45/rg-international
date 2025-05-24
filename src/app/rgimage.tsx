import Image from "next/image";

const RGImage = () => {
  return (
    <Image
      src="/office.png"
      alt="Hero Background"
      layout="fill"
      objectFit="cover"
    />
  );
};

export default RGImage;