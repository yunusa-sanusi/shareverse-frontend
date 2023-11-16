'use client';
import { useState } from 'react';
import Link from 'next/link';
// import { CiLight } from 'react-icons/ci';
import { MdClose, MdMenu } from 'react-icons/md';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const openmenu = () => {
    setIsMenuOpen(true);
  };

  const closemenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    const mode = theme === 'light' ? 'dark' : 'light';
    setTheme(mode);
  };

  return (
    <header className="max-w-[98%] md:max-w-6xl mx-auto md:px-4 py-3">
      <nav className="w-full flex justify-between items-center">
        <Link href="/">
          <h1 className="w-fit bg-skyBlue px-3 py-2 rounded-tr-md rounded-bl-md text-white font-bold">
            Share Verse
          </h1>
        </Link>

        <ul className="hidden md:flex gap-x-3 items-center text-sm font-semibold">
          <Link
            href="#"
            className="hover:opacity-20 transition-all duration-300"
          >
            <li>Our Story</li>
          </Link>
          <Link
            href="#"
            className="hover:opacity-20 transition-all duration-300"
          >
            <li>Write</li>
          </Link>
          <Link
            href="#"
            className="hover:opacity-20 transition-all duration-300"
          >
            <li>Membership</li>
          </Link>
          <Link
            href="#"
            className="hover:opacity-20 transition-all duration-300"
          >
            <li>Sign In</li>
          </Link>
        </ul>

        <div className="flex items-center gap-x-2">
          <div className="bg-lightSecondary300 dark:bg-darkSecondary300 border border-lightStroke dark:border-darkStroke rounded-md hidden md:flex items-center">
            <input
              type="search"
              placeholder="Search"
              className="py-2 pl-4 pr-2 bg-transparent outline-none rounded-md"
            />
          </div>
          {/* <button
            className="bg-skyBlue hidden md:block rounded-full text-white flex items-center"
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <MdDarkMode size={24} className="justify-self-end" />
            ) : (
              <CiLight size={24} className="justify-self-start" />
            )}
          </button> */}
        </div>

        <div className="block md:hidden">
          {/* <button className="bg-skyBlue" onClick={toggleTheme}>
            toggle
          </button> */}
          <MdMenu size={24} className="cursor-pointer" onClick={openmenu} />
        </div>

        {/* mobile menu */}
        <div
          className={`bg-lightSecondary300 dark:bg-darkSecondary900 bg-opacity-95 dark:bg-opacity-95 flex md:hidden flex-col justify-center items-center absolute top-2 left-[0.5%] w-[99%] h-[98%] mx-auto px-3 rounded-md border border-lightStroke dark:border-darkStroke ${
            isMenuOpen ? 'fade-in-animation' : 'fade-out-animation'
          }`}
        >
          <div className="absolute top-3 right-1">
            <MdClose size={24} className="cursor-pointer" onClick={closemenu} />
          </div>

          <ul className="flex flex-col gap-y-6 items-center text-xl font-semibold pb-14">
            <Link
              href="#"
              className="hover:opacity-20 transition-all duration-300"
            >
              <li>Our Story</li>
            </Link>
            <Link
              href="#"
              className="hover:opacity-20 transition-all duration-300"
            >
              <li>Write</li>
            </Link>
            <Link
              href="#"
              className="hover:opacity-20 transition-all duration-300"
            >
              <li>Membership</li>
            </Link>
            <Link
              href="#"
              className="hover:opacity-20 transition-all duration-300"
            >
              <li>Sign In</li>
            </Link>
          </ul>

          <div className="bg-lightSecondary300 dark:bg-darkSecondary300 border border-lightStroke dark:border-darkStroke rounded-md flex items-center w-full">
            <input
              type="search"
              placeholder="Search"
              className="py-2 pl-4 pr-2 bg-transparent outline-none rounded-md"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
