import Image from "next/image";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import styles from "../contact/contact.module.css";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});


export default function Services() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center ">
      {/* Background Image for Header */}
      <div className="relative w-full">
        <Image
          className="w-full h-[250px] sm:h-[400px] lg:h-[500px] object-cover"
          src="/office.png"
          alt="Contact Us Background"
          width={500}
          height={350}
        />
        <div
          className={`absolute inset-0 flex items-center justify-center text-white text-4xl sm:text-6xl lg:text-9xl ${styles.item}`}
        >
          <span className={`${poppins.className} tracking-tight px-4 sm:px-10`}>
            OUR
          </span>
          <span className={`${poppins.className} tracking-tight`}>SERVICES</span>
        </div>
      </div>
      </div>);}

