import Image from "next/image";
import styles from "./about.module.css";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Roboto } from "next/font/google";

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

      {/* Managing Director Section */}
      <div className="flex flex-col items-center justify-center w-full  pt-20 bg-gray-200 z-20">
        {/* Image & Name Section */}
        <div className="flex lg:flex-row lg:gap-x-24 sm:flex-col items-center justify-center sm:gap-y-20 ">
          <div className="bg-amber-300 rotate-45 relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] rounded-4xl overflow-hidden flex items-center justify-center z-10">
            <Image
              className={`${styles.item} ${styles.image} absolute -rotate-45 scale-100 pt-10 sm:scale-105 sm:pt-10 lg:pt-10 lg:scale-110 `}
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
              <p>Raju</p>
              <p>Gaire</p>
            </span>
            <span className="font-bold text-lg sm:text-[13px] lg:text-2xl text-gray-500 mt-2">
              - Managing Director
            </span>
          </div>
        </div>

        {/* Message Section */}
        <div className="relative flex items-center justify-center min-h-screen w-full text-gray-700 py-16 px-6 md:px-12 lg:px-20">
          {/* Background Image with Next.js <Image> */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/rgintco.jpg" // Ensure this image is in your 'public/' folder
              alt="RG International Background"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          {/* Content */}
          <div>
          <div className="relative max-w-3xl bg-white/10 p-8 rounded-xl shadow-lg backdrop-blur-md ">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 uppercase tracking-wide mb-6">
              Unlock Your Future in Japan!
            </h2>

            {/* Description */}
            <div className="text-lg md:text-xl leading-relaxed space-y-6">
              <p className="font-semibold">
                <span className="text-gray-900">
                  Dear Aspiring Professionals,
                </span>
              </p>

              <p>
                At{" "}
                <span className="font-semibold text-blue-700">
                  RG International Corp. Pvt. Ltd.
                </span>
                , we are proud to be a trusted gateway for skilled workers from
                Nepal looking to build successful careers in Japan. Our mission
                is to provide{" "}
                <span className="font-semibold text-green-700">
                  transparent, ethical, and efficient
                </span>{" "}
                visa processing services, ensuring your journey is{" "}
                <span className="italic">smooth and hassle-free</span>.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6">
                Why Choose Us?
              </h3>
              <ul className="list-disc pl-6 text-base sm:text-lg text-gray-800">
                <li>✅ Reliable Visa Assistance with No Hidden Hassles</li>
                <li>✅ Direct Employment Opportunities in Japan</li>
                <li>✅ Ethical, Transparent, and Fast Processing</li>
                <li>✅ Full Support—From Application to Settlement</li>
              </ul>

              <p>
                Japan offers a wealth of opportunities, and we are here to{" "}
                <span className="font-semibold text-blue-700">
                  empower your journey toward a brighter future.
                </span>{" "}
                Let us help you take this important step with confidence!
              </p>

              {/* Contact Button */}
              <p className="text-center mt-6">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg"
                >
                  Contact Us
                </Link>
              </p>

              {/* Signature */}
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
        </div>
      </div>
    </div>
  );
}
