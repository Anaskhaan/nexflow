import React from 'react';
import Sidebar from "../Sidebar";

const Navbar = () => {
  return (
    <div>
      {/* sidebar */}
      <div className=" block md:hidden">
        <Sidebar />
      </div>
{/* navbar */}
      <div className=' hidden lg:block'>

      <h1>Navbar</h1>
      </div>
    </div>
  );
};

export default Navbar;