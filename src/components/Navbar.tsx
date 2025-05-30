"use client";

import React, { useState } from "react";
import NavCard from "./ReuseComps/NavCard";
import Link from "next/link";
import { ChevronUp } from "lucide-react";

const Navbar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="drawer z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-[#020817] border border-zinc-700 w-[90%] mx-auto rounded-2xl mt-6 px-6 py-4">
          {/* Mobile Layout */}
          <div className="flex justify-between items-center w-full lg:hidden">
            {/* Left: Logo */}
            <div className="text-xl font-bold text-white">TransferX</div>

            {/* Right: Hamburger */}
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex justify-between items-center w-full">
            {/* Left: Logo */}
            <div className="text-xl font-bold text-white">TransferX</div>

            {/* Center: Navigation */}
            <div className="flex gap-8 text-white relative">
              <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex flex-row-reverse gap-2 items-center">
                  <ChevronUp size={20} />
                  <Link href="#" className="hover:text-gray-400">
                    Features
                  </Link>
                </div>

                {isHovered && (
                  <div className="absolute top-full left-0 mt-2 z-50">
                    <NavCard />
                  </div>
                )}
              </div>
              <Link href="#" className="hover:text-gray-400">
                Team
              </Link>
              <Link href="#" className="hover:text-gray-400">
                Contact
              </Link>
            </div>

            {/* Right: Login */}
            <div className="text-white">
              <Link href="#" className="hover:text-gray-400">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Side Menu (Mobile) */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay" />
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <li>
            <Link href="#">Features</Link>
          </li>
          <li>
            <Link href="#">Team</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <Link href="#">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
