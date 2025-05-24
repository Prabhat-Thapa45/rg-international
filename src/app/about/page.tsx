import Image from "next/image";
import styles from "./about.module.css";
import { Rubik_Mono_One } from "next/font/google";
import Link from "next/link";

const poppins = Rubik_Mono_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function About() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Background Wrapper */}
      <div className="relative w-full">
        {/* Background Image */}
        <Image
          className="w-full h-[250px] sm:h-[400px] lg:h-[500px] object-cover"
          src="/worker.png"
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

      {/* Managing Director Section */}
      <div className="flex flex-col items-center justify-center w-full  mt-20 ">
        {/* Image & Name Section */}
          <div className="flex lg:flex-row lg:gap-x-24 sm:flex-col items-center justify-center sm:gap-y-20 ">
          <div className="bg-amber-300 rotate-45 relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] rounded-4xl overflow-hidden flex items-center justify-center">
            <Image
              className={`${styles.item} ${styles.image} absolute -rotate-45 scale-100 pt-10 sm:scale-105 sm:pt-10 lg:pt-10 lg:scale-110`}
              src="/md.png"
              alt="Managing Director"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col text-center">
            <span
              className={`${styles.name} ${poppins.className} text-[40px] lg:text-[60px] lg:block sm:hidden text-gray-700`}
            >
              Raju <br /> Gaire
            </span>
            <span
              className={`${styles.name} ${poppins.className} flex flex-row tracking-tight sm:text-[40px] lg:hidden sm:block text-gray-700`}
            >
              <p>Raju</p><p>Gaire</p>
            </span>
            <span className="font-bold text-lg sm:text-[13px] lg:text-2xl text-gray-500 mt-2">
              - Managing Director
            </span>
          </div>
        </div>

        {/* Message Section */}
        <div className="p-44 sm:p-10 text-gray-800 rounded-xl shadow-lg w-full lg:w-6xl px-8 sm:px-12 mt-10 sm:mt-14 ">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-700 mb-4 sm:mb-6">
            Unlock Your Future in Japan with RG International Corp. Pvt. Ltd.!
          </h2>

          <p className="text-base sm:text-lg font-medium leading-relaxed">
            <span className="font-bold text-gray-700">
              Dear Aspiring Professionals,
            </span>
            <br />
            <br />
            At{" "}
            <span className="font-semibold text-blue-700">
              RG International Corp. Pvt. Ltd.
            </span>
            , we are proud to be a trusted gateway for skilled workers from
            Nepal looking to build successful careers in Japan. Our mission is
            to provide{" "}
            <span className="font-semibold text-green-700">
              transparent, ethical, and efficient
            </span>{" "}
            visa processing services, ensuring your journey to Japan is{" "}
            <span className="italic">smooth and hassle-free</span>.
          </p>

          <p className="text-base sm:text-lg leading-relaxed mt-4">
            We understand that working abroad is a life-changing decision.
            That's why our expert team is dedicated to guiding you every step of
            the way—from visa applications to job placement, ensuring you find{" "}
            <span className="font-semibold text-green-700">
              stable, well-paying opportunities
            </span>{" "}
            that match your skills.
          </p>

          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6">
            Why Choose RG International Corp. Pvt. Ltd.?
          </h3>
          <ul className="list-disc pl-4 sm:pl-6 mt-2 sm:mt-3 text-base sm:text-lg">
            <li className="font-semibold text-gray-700">
              ✅ Reliable Visa Assistance with No Hidden Hassles
            </li>
            <li className="font-semibold text-gray-700">
              ✅ Direct Employment Opportunities with Japanese Companies
            </li>
            <li className="font-semibold text-gray-700">
              ✅ Ethical, Transparent, and Fast Processing
            </li>
            <li className="font-semibold text-gray-700">
              ✅ Full Support—From Application to Settlement
            </li>
          </ul>

          <p className="text-base sm:text-lg leading-relaxed mt-6">
            Japan offers a wealth of opportunities, and we are here to{" "}
            <span className="font-semibold text-blue-700">
              empower your journey toward a brighter future.
            </span>{" "}
            Let us help you take this important step with confidence!
          </p>

          <p className="text-center text-lg sm:text-xl font-bold text-gray-800 mt-6 sm:mt-8">
            <Link
              href="/contact"
              className="text-blue-600 font-bold hover:underline"
            >
              Contact Us
            </Link>
          </p>

          <p className="text-base sm:text-lg font-bold text-gray-900 text-center mt-6">
            Best Regards, <br />
            <span className="text-blue-700 text-lg sm:text-xl lg:text-2xl">
              Raju Gairey
            </span>{" "}
            <br />
            Managing Director, RG International Corp. Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
  );
}
