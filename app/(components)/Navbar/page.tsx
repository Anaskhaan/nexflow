// import React from 'react';
// import Sidebar from "../Sidebar";

// const Navbar = () => {
//   return (
//     <div>
//       {/* sidebar */}
//       <div className=" block md:hidden">
//         <Sidebar />
//       </div>
// {/* navbar */}
//       <div className=' hidden lg:block'>

//       <h1>Navbar</h1>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


'use client';

import Link from 'next/link';
import { useState } from 'react';
import Sidebar from '../Sidebar';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-primary">Nexflow</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 span-text">
          <Link href="#">Home</Link>
          <Link href="#">Services</Link>
          <Link href="#">About</Link>
          <Link href="#">Portfolio</Link>
          <Link href="#">Contact</Link>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex">
          <button className="btn-primary ">
            Contact Sales
          </button>
          
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </header>
  );
};

export default Navbar;
