"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function SvgImage() {
  const pathname = usePathname();

  // Define proper mapping for the titles
  const pageTitles: Record<string, string> = {
    "/about": "About Us",
    "/contact": "Contact Us",
    "/services": "Services", // Fix added here
  };

  // Get the title based on pathname or default to "Home"
  const formattedTitle = pageTitles[pathname] || "Home";

  return (
    <motion.div className="pt-[70px]"
      initial={{ scale: 1, opacity: 0.5 }} 
      animate={{ scale: 1.02, opacity: 1 }} 
      transition={{ duration: 1.5, ease: "easeInOut" }} 
    >
      {/* Background Image for Desktop */}
      <div className="hidden md:block">
        <Image
          className="object-contain"
          src="/tokyo.jpg"
          alt="Background Image"
          layout="responsive"
          width={1300}
          height={200}
        />
      </div>

      {/* Plain Gray Background for Mobile */}
      <div className="block md:hidden bg-gray-300 h-[350px] w-full"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center font-semibold text-gray-700 z-10">
        {/* Breadcrumb */}
        <div className="flex text-[15px] space-x-2">
          <span className="text-black">Home</span>
          <span className="text-black">/</span>
          <span className="text-red-500">{formattedTitle}</span>
        </div>

        {/* Page Title */}
        <span className="font-extrabold text-7xl mt-4">{formattedTitle}</span>
      </div>
    </motion.div>
  );
}
