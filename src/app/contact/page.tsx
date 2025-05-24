import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import Image from "next/image";
import styles from "./contact.module.css";

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

export default function Contact() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center ">
      {/* Background Image for Header */}
      <div className="relative w-full">
        <Image
          className="w-full h-[250px] sm:h-[400px] lg:h-[500px] object-cover"
          src="/worker.png"
          alt="Contact Us Background"
          width={500}
          height={350}
        />
        <div
          className={`absolute inset-0 flex items-center justify-center text-white text-4xl sm:text-6xl lg:text-9xl ${styles.item}`}
        >
          <span className={`${poppins.className} tracking-tight px-4 sm:px-10`}>
            CONTACT
          </span>
          <span className={`${poppins.className} tracking-tight`}>US</span>
        </div>
      </div>

      {/* Contact Info & Map Container */}
      <div className={`flex flex-row justify-center lg:w-6xl mt-10 sm:mt-16 lg:mt-20 gap-10 ${styles.contact}`}>
        {/* Contact Details */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-gray-100 p-6 shadow-md flex items-center gap-6 transition-transform duration-500 hover:translate-z-16 hover:scale-105 hover:shadow-xl">
              <FaMapMarkerAlt className="text-red-600 text-4xl" />
              <div>
                <h2
                  className={`${poppins.className} text-xl font-extrabold text-gray-700`}
                >
                  OFFICE ADDRESS
                </h2>
                <p className={`${roboto.className} text-lg font-medium`}>
                  Nuyamazu , Kumamoto-shi, Kumamoto, Japan
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gray-100 p-6 shadow-md flex items-center gap-6 transition-transform duration-500 hover:translate-z-16 hover:scale-105 hover:shadow-xl">
              <FaPhoneAlt className="text-blue-600 text-4xl" />
              <div>
                <h2
                  className={`${poppins.className} text-xl font-extrabold text-gray-700`}
                >
                  PHONE NUMBER
                </h2>
                <p className={`${roboto.className} text-lg font-medium`}>
                  +81 80-4690-4311
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-100 p-6 shadow-md flex items-center gap-6 transition-transform duration-500 hover:translate-z-16 hover:scale-105 hover:shadow-xl">
              <FaEnvelope className="text-blue-600 text-4xl" />
              <div>
                <h2
                  className={`${poppins.className} text-xl font-extrabold text-gray-700`}
                >
                  EMAIL ADDRESS
                </h2>
                <p className={`${roboto.className} text-lg font-medium`}>
                  rgintl.co@gmail.com
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-100 p-6 shadow-md flex items-center gap-6 transition-transform duration-500 hover:translate-z-16 hover:scale-105 hover:shadow-xl">
              <FaClock className="text-gray-600 text-4xl" />
              <div>
                <h2
                  className={`${poppins.className} text-xl font-extrabold text-gray-700 `}
                >
                  OFFICE HOURS
                </h2>
                <p className={`${roboto.className} text-lg font-medium`}>
                  Sunday-Friday, 10AM - 5PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 transition-transform duration-500 hover:translate-z-16 hover:scale-105 hover:shadow-xl">
          <iframe
            className={` w-full h-full shadow-lg`}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5540.631757818629!2d130.77296832602218!3d32.77615149595259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f30031699fa3%3A0x40f0ef49fdae71dc!2sRG%20international%20co.%2Cltd.!5e1!3m2!1sen!2snp!4v1748074303280!5m2!1sen!2snp"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        
      </div>
    </div>
  );
}
