"use client";
import Image from "next/image";
import AboutSection from "./aboutSection";
import RGImage from "../rgimage";
import { motion } from "framer-motion";
import Intro from "./intro";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-start justify-center w-screen h-screen bg-cover bg-center overflow-hidden px-6">
      {/* Animated Background Image - Slight Scale Effect */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 4, ease: "easeInOut" }}
        className="absolute inset-0 z-0 "
      >
        <RGImage />
        <div className="bg-black opacity-40 w-screen h-screen z-10"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="absolute inset-0"
      ></motion.div>

      {/* Animated Text - Aligned Properly */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ staggerChildren: 0.5 }}
        className="relative z-10 text-white mx-auto w-full max-w-[700px] sm:max-w-[90%] px-4"
      >
        {/* Heading */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="text-[32px] sm:text-[3x0px] md:text-[40px] lg:text-[60px] tracking-normal font-bold whitespace-nowrap"
        >
          Making your life brighter
        </motion.h1>

        {/* Subheading - Aligned */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
          className="text-sm sm:text-lg md:text-xl lg:text-2xl capitalize font-extrabold mt-2"
        >
          Connecting top talent with leading industries worldwide.
        </motion.p>

        {/* Button - Aligned */}
        <motion.button
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
          className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-xs sm:text-sm md:text-base lg:text-lg"
        >
          <Link href="/contact">Contact Us</Link>
        </motion.button>
      </motion.div>
    </section>
  );
};




const ServicesSection = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
      </div>
      <a
        href="/services"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
      >
        View All Services
      </a>
    </section>
  );
};

const industries = ["Construction", "IT", "Healthcare", "Finance", "Retail"];

const IndustriesSection = () => {
  return (
    <section className="py-16 px-6 text-center bg-gray-100">
      <h2 className="text-3xl font-bold">Industries We Serve</h2>
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-lg text-lg font-semibold"
          >
            {industry}
          </div>
        ))}
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "John Doe",
    feedback: "This company helped us find the best talent in record time!",
  },
  {
    name: "Jane Smith",
    feedback: "Highly professional and reliable manpower solutions.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold">What Our Clients Say</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-lg italic">"{testimonial.feedback}"</p>
            <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-16 px-6 text-center bg-blue-600 text-white">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="mt-4 text-lg">
        Looking for manpower solutions? Contact us today!
      </p>
      <a
        href="/contact"
        className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg"
      >
        Contact Us
      </a>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Intro />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
