"use client";
import React, { useState } from "react";
import { categorizedServices } from "./services";
import Layout from "../svglayout";

export default function Services() {
  return (
    <Layout>
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center ">
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
    </Layout>
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
        <span
          className={`transition-transform duration-300 ${
            expanded ? "rotate-180" : "rotate-0"
          }`}
        >
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
