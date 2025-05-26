"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false); // Ensure component only runs on client

  useEffect(() => {
    setIsClient(true); // Mark client-side rendering

    const handleResize = () => setIsMobile(window.innerWidth <= 770);

    handleResize(); // Run initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed z-50 w-full shadow-lg bg-white text-gray-800">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between h-30 items-center">
          {/* Logo + Title */}
          <div className="flex items-center">
            <Link className="flex flex-row items-center justify-center" href="/">
              <Image
                src="/logo.jpg"
                alt="RG International Logo"
                width={90}
                height={90}
                priority
              />
              <span className={`text-3xl font-bold text-gray-800 `}>
                RG International
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links (Hidden below 770px) */}
          {isClient && (
            <div className={`${isMobile ? "hidden" : "flex"} justify-center flex-grow space-x-10`}>
              {links.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span
                    className={`group relative inline-block py-2 text-2xl transition-colors ${
                      pathname === link.href ? "text-red-500 font-medium" : "hover:text-red-500"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 top-full mt-2 h-0.5 w-full bg-red-500 transform ${
                        pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      } transition-transform duration-500 origin-left`}
                    />
                  </span>
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Menu Button (Appears below 770px) */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-200 focus:outline-none z-20"
            >
              <span className="sr-only">Open menu</span>
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-500 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`} />
                <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-500 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`} />
                <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-500 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`} />
              </div>
            </button>
          )}
        </div>

        {/* Mobile Dropdown Menu (Appears on toggle) */}
        {isOpen && isMobile && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4">
            {links.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                <span className={`text-xl ${pathname === link.href ? "text-red-500" : "hover:text-red-500"}`}>
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
