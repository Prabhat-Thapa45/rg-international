import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-10 mb-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row lg:justify-between">
        {/* Left: Organization Name & Quick Links */}
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
          <Image
            src="/logo.jpg"
            alt="RG International Logo"
            width={128}
            height={128}
            priority
          />
        </div>

        <div className="lg:w-1/3">
          <div className="flex flex-col items-center lg:items-start">
            <div className="mt-4 text-2xl font-semibold ">Quick Links</div>
            <div className="mt-2 space-y-2">
              <Link href="/" className="block hover:text-gray-400">
                Home
              </Link>
              <Link href="/about" className="block hover:text-gray-400">
                About
              </Link>
              <Link href="/services" className="block hover:text-gray-400">
                Services
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Contact Details */}
        <div className="lg:w-1/3">
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-semibold">Contact Us</h3>

            {/* Address */}
            <div className="mt-2 flex items-start gap-2">
              <FaMapMarkerAlt className="text-red-500 text-xl mt-1" />
              <div>
                <p>1 Chome-1-2 Nishishinjuku,</p>
                <p>Shinjuku City, Tokyo 160-0023, Japan</p>
              </div>
            </div>

            {/* Phone */}
            <div className="mt-1 flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500 text-xl" />
              <p>+81 962376573</p>
            </div>

            {/* Email */}
            <div className="mt-1 flex items-center gap-2">
              <FaEnvelope className="text-yellow-500 text-xl" />
              <p>info@rginternational.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Center: Social Media Icons */}
      <div className="mt-10 flex justify-center space-x-6">
        <Link href="https://www.facebook.com/profile.php?id=100094504333669" className="p-3 rounded-full text-xl hover:text-blue-500 duration-500 hover:bg-white hover:-translate-0.5">
          <FaFacebookF />
        </Link>
      </div>

      {/* Bottom: Copyright Notice */}
      <div className="mt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} RG International. All Rights Reserved.
      </div>
    </footer>
  );
}
