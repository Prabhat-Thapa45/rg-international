"use client";
import Image from "next/image";
import AboutSection from "./aboutSection";
import { DM_Sans } from "next/font/google";
import styles from "./heroSection.module.css";

import { motion } from "framer-motion";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["900"],
});

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-cover bg-center overflow-hidden">
      {/* Animated Background Image - Slight Scale Effect */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 4, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/worker.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      {/* Animated Overlay - Expands from Right to Left */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{opacity: 0.4 }}
        transition={{ delay: 0.2, duration: 1.8, ease: "easeIn" }}
        className="absolute inset-0 bg-black opacity-50"
      ></motion.div>

      {/* Animated Text - Appears After Background Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 1.5, ease: "easeInOut" }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className={`text-[60px] tracking-[-0.03em] shadow-lg ${dmSans.className} ${styles.text}`}>
          Making your life brighter
        </h1>
        <p className="text-3xl shadow-lg capitalize font-extrabold">
          Connecting top talent with leading industries worldwide.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
          Find Manpower
        </button>
      </motion.div>
    </section>
  );
};
const services = [
  { name: "Recruitment & Staffing", icon: "/recruitment-icon.png" },
  { name: "HR Consulting", icon: "/hr-icon.png" },
  { name: "Outsourcing Solutions", icon: "/outsourcing-icon.png" },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
            <Image
              src={service.icon}
              alt={service.name}
              width={50}
              height={50}
            />
            <h3 className="mt-4 text-xl font-semibold">{service.name}</h3>
          </div>
        ))}
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
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
