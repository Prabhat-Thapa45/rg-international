"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaRegCalendarAlt, FaRegLaughBeam } from "react-icons/fa";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["900"],
});

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [years, setYears] = useState(0);
  const [placements, setPlacements] = useState(0);
  const [yearsInBusiness, setYearsInBusiness] = useState(0);

  useEffect(() => {
    const startingDate = new Date(2023, 6, 1);
    const currentDate = new Date();
    let timeDiff = currentDate.getTime() - startingDate.getTime();
    timeDiff = parseFloat(
      (timeDiff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(2)
    );
    setYearsInBusiness(timeDiff);
  }, []);
  console.log(yearsInBusiness);

  useEffect(() => {
    if (inView) {
      const yearsInterval = setInterval(() => {
        setYears((prev) =>
          prev < yearsInBusiness
            ? parseFloat((prev + 0.2).toFixed(1))
            : yearsInBusiness
        );
      }, 150);

      const placementsInterval = setInterval(() => {
        setPlacements((prev) => (prev < 500 ? prev + 10 : 500));
      }, 50);

      return () => {
        clearInterval(yearsInterval);
        clearInterval(placementsInterval);
      };
    }
  }, [inView, yearsInBusiness]);

  return (
    <section ref={ref} className="py-20 px-8 text-center bg-gray-100">
      <div className="flex justify-center items-center gap-12">
        {/* Years in Business */}
        <div className="flex flex-col items-center">
          <FaRegCalendarAlt size={50} />
          <p className={`text-5xl font-extrabold ${dmSans.className}`}>
            {years}+
          </p>
          <p className="text-xl font-medium">Years in Business</p>
        </div>

        {/* Successful Placements */}
        <div className="flex flex-col items-center">
          <FaRegLaughBeam size={50} />
          <p className={`text-5xl font-extrabold ${dmSans.className}`}>
            {placements}+
          </p>
          <p className="text-xl font-medium">Happy clients</p>
        </div>
      </div>
    </section>
  );
}
