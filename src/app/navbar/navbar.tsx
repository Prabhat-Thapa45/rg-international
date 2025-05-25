"use client"
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const pathname = usePathname();

  // On mount, read theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle('dark', stored === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
  const nextTheme = theme === "light" ? "dark" : "light";
  setTheme(nextTheme);

  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
};

// Load saved theme on page load
useEffect(() => {
  const storedTheme = localStorage.getItem("theme") || "light";
  setTheme(storedTheme);
  document.documentElement.setAttribute("data-theme", storedTheme);
}, []);


  const links = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const logoSrc = theme === "dark" ? "/dark.png" : "/light.png";

  
  return (
    <nav className="fixed z-50 w-full shadow-lg bg-[var(--navbg)] text-[--foreground]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between h-30">
          <div className="flex items-center">
            <Link href="/">
             <Image src={logoSrc} alt="RG International Logo" width={128} height={128} priority />
              {/* <span className="text-3xl font-bold ">RGInternational</span> */}
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="items-center hidden space-x-20 md:flex">
            {links.map(link => (
              <Link key={link.name} href={link.href}>
                <span className={
                  `group relative inline-block py-2 text-2xl transition-colors ` +
                  (pathname === link.href
                    ? 'text-[var(--navactive)] font-medium'
                    : ' hover:text-[var(--navactive)]  hover:text-[var(--navactive)]')
                } >
                  {link.name}
                 <span
                    className={
                      `absolute left-0 top-full mt-8 h-0.5 w-full bg-[var(--navactive)] transform ` +
                      (pathname === link.href
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100') +
                      ` transition-transform duration-500 origin-left`
                    }
                  />
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 mr-4 transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {theme === 'light' ? <Moon /> : <Sun />}
              </motion.div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-colors rounded-md md:hidden hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-[var(--foreground)] transition-transform duration-500 ${isOpen ? 'transform duration-500 rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-[var(--foreground)] transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-6 h-0.5 bg-[var(--foreground)] transition-transform duration-500 ${isOpen ? 'transform duration-500 -rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white md:hidden dark:bg-gray-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map(link => (
              <Link key={link.name} href={link.href}>
                <span className={
                    `block px-3 py-2 rounded-md text-xl font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors` +
                    (pathname === link.href ? ' bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300' : '')
                  }>
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}

    </nav>
  );
}
