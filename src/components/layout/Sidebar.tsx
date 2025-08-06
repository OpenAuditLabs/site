"use client";

import React, { useState } from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-transform duration-300 z-40 ${
        isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"
      }`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute -right-12 top-4 bg-gray-800 text-white px-3 py-2 rounded-r-md hover:bg-gray-700 transition-colors"
      >
        {isOpen ? "←" : "→"}
      </button>
      {isOpen && (
        <nav className="p-6 pt-16">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="block text-gray-700 hover:text-gray-900 py-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-gray-900 py-2"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/audits"
                className="block text-gray-700 hover:text-gray-900 py-2"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-gray-900 py-2"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
