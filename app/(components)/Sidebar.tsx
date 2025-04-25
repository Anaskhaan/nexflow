// import React from 'react';
// const Sidebar = () => {
//   return (
//     <div>
//       Sidebar
//     </div>
//   );
// };

// export default Sidebar;

'use client';

import Link from 'next/link';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white p-6 md:hidden">
      {/* Close Icon */}
      <div className="flex justify-end">
        <button onClick={() => setOpen(false)}>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex flex-col space-y-4 mt-6">
        <Link href="#">Product</Link>
        <Link href="#">Solutions</Link>
        <Link href="#">Company</Link>
        <Link href="#">Customers</Link>
        <Link href="#">App</Link>
      </div>

      {/* Buttons */}
      <div className="mt-6 space-y-3">
        <button className="w-full border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition">
          Contact Sales
        </button>
        <button className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition">
          Book a demo
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
