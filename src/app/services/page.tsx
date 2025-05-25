"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import styles from "../contact/contact.module.css";
import { categorizedServices } from "./services";

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
          <span className={`${poppins.className} tracking-tight`}>
            SERVICES
          </span>
        </div>
      </div>
      <section className="py-20 px-8 bg-gray-100 w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="space-y-10">
          {categorizedServices.map((category) => (
            <CategorySection key={category.category} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}


function CategorySection({
  category,
}: {
  category: { category: string; services: any[] };
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md w-full max-w-[800px] mx-auto transition-all hover:bg-gray-200">
      {/* Header Section */}
      <div
        className="relative cursor-pointer flex justify-between items-center w-full p-4 rounded-md transition-colors duration-300 z-20"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="text-2xl font-semibold">{category.category}</h3>
        <span className={`transition-transform duration-300 ${expanded ? "rotate-180" : "rotate-0"}`}>
          ▼
        </span>
      </div>

      {/* Expandable Services Grid */}
      <div
        className={`relative grid transition-all duration-1000 ease-in-out ${
          expanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-visible grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 z-10`}
      >
        {category.services.map((service) => (
          <div
            key={service.id}
            className="relative p-4 bg-gray-50 rounded-lg transition-all duration-500 ease-out perspective-1000 hover:scale-110 hover:shadow-xl"
          >
            <h4 className="text-xl font-medium flex items-center">
              <span className="mr-2">{service.icon}</span> {service.title}
            </h4>
            <p className="text-gray-700 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
