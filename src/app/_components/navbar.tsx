"use client";
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 pt-4 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500">
      <nav className="bg-gradient-to-r mx-2 from-blue-200 via-blue-300 to-blue-500 rounded-full p-1 flex items-center justify-between border-1 border-white shadow-md">

        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2 ml-4 cursor-pointer">
            {/* <img src="/amitlogo.png" alt="Logo" className="h-8 w-8" /> */}
            <span className="font-bold text-gray-700 text-lg">
              A<span className="text-blue-800">mit</span>
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/">
            <p className="text-gray-700 hover:text-blue-700 text-sm font-semibold">Home</p>
          </Link>
          <Link href="/about">
            <p className="text-gray-700 hover:text-blue-700 text-sm font-medium">About</p>
          </Link>
          <Link href="/services">
            <p className="text-gray-700 hover:text-blue-700 text-sm font-medium">Services</p>
          </Link>
          <Link href="/projects">
            <p className="text-gray-700 hover:text-blue-700 text-sm font-medium">Projects</p>
          </Link>
          <Link href="/contact">
            <p className="bg-blue-700 hover:bg-white text-white text-sm hover:border hover:border-blue-700 hover:text-blue-700 font-medium py-2 px-5 rounded-full">
              Contact
            </p>
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden mr-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r mx-2 mt-2 from-blue-200 via-blue-300 to-blue-500 rounded-lg p-4 shadow-md">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <p className="block py-2 text-gray-700 hover:text-blue-700 text-sm font-medium">Home</p>
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <p className="block py-2 text-gray-700 hover:text-blue-700 text-sm font-medium">About</p>
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>
            <p className="block py-2 text-gray-700 hover:text-blue-700 text-sm font-medium">Services</p>
          </Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>
            <p className="block py-2 text-gray-700 hover:text-blue-700 text-sm font-medium">Projects</p>
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <p className="block w-24 sm:w-auto py-2 mt-2 bg-blue-700 hover:bg-white text-white hover:border-2 hover:border-blue-700 hover:text-blue-700 text-center text-sm font-semibold px-5 rounded-full">
              Contact
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
