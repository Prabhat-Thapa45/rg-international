import Image from "next/image";
import styles from "./about.module.css";
import { Poppins } from "next/font/google";
import MessageFromDirector from "./message";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

export default function About() {
  return (
    <div className="pt-[60px]">
      {/* Background Wrapper */}
      <div className="relative w-full">
        {/* Background Image */}
        <Image
          className="w-full h-[250px] sm:h-[400px] lg:h-[500px] object-cover"
          src="/office.png"
          alt=""
          width={500}
          height={350}
        />

        {/* Centered Text Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center text-white text-4xl sm:text-6xl lg:text-9xl ${styles.image}`}>
          <span className={`${poppins.className} tracking-tight px-4 sm:px-10`}>
            ABOUT
          </span>
          <span className={`${poppins.className} tracking-tight`}>US</span>
        </div>
      </div>
        {/* Message Section */}
        <MessageFromDirector />
    </div>
  );
}
