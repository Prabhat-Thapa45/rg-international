"use client"
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaRegCalendarAlt } from "react-icons/fa";
import { DM_Sans } from "next/font/google";
import { TbCertificate } from "react-icons/tb";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["900"],
});

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [years, setYears] = useState(0);
  const [placements, setPlacements] = useState(0);

  useEffect(() => {
    if (inView) {
      const yearsInterval = setInterval(() => {
        setYears((prev) => (prev < 10 ? prev + 1 : 10));
      }, 150);

      const placementsInterval = setInterval(() => {
        setPlacements((prev) => (prev < 500 ? prev + 10 : 500));
      }, 50);

      return () => {
        clearInterval(yearsInterval);
        clearInterval(placementsInterval);
      };
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-20 px-8 bg-gray-100 text-center">
      <h2 className={`text-6xl font-extrabold mb-6 tracking-[-0.03em] ${dmSans.className}`}>About Our Company</h2>
      <div className="flex justify-center items-center gap-12">
        {/* Years in Business */}
        <div className="flex flex-col items-center">
          <FaRegCalendarAlt size={50}/>
          <p className="text-5xl font-extrabold ">{years}+</p>
          <p className="text-xl font-medium">Years in Business</p>
        </div>

        {/* Successful Placements */}
        <div className="flex flex-col items-center">
          <TbCertificate size={50}/>
          <p className="text-5xl font-extrabold ">{placements}+</p>
          <p className="text-xl font-medium">Successful Placements</p>
        </div>
      </div>
    </section>
  );
};
