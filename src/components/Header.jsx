import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img
          src="https://littlelemonmedia.co.uk/wp-content/uploads/2022/07/logo.png"
          alt="Little Lemon"
          className="h-10"
        />

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-bold text-[#495E57] uppercase text-sm">
          <li>
            <a href="/" className="hover:text-[#F4CE14]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#F4CE14]">
              About
            </a>
          </li>
          <li>
            <a href="#menu" className="hover:text-[#F4CE14]">
              Menu
            </a>
          </li>
          <li>
            <a href="#reservations" className="hover:text-[#F4CE14]">
              Reservations
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#495E57]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <ul className="md:hidden bg-white py-4 flex flex-col items-center gap-4 font-bold text-[#495E57] border-t">
          <li>
            <a href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#reservations" onClick={() => setIsMenuOpen(false)}>
              Reservations
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
