import { useState } from "react";
import { FaBook, FaTicket, FaPlus, FaBars } from "react-icons/fa6";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Header with Hamburger */}
      <header className="fixed top-0 left-30  bg-white shadow-md p-4 flex items-center md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 text-2xl">
          <FaBars />
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative h-screen bg-white shadow-lg flex flex-col p-5 transition-all duration-300 z-40 w-64 md:w-[15%] 
        ${isOpen ? "translate-x-0" : "-translate-x-full md:-translate-x-[85%]"} 
        ${isHovered ? "md:translate-x-0" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Logo */}
        <a className="text-xl p-2 rounded-xl font-bold group hover:bg-yellow-500 text-gray-800 mb-6 flex flex-col items-center">
          <FaBook className="mr-2 text-yellow-500 group-hover:text-white" />
          <span className="md:block">Courses</span>
        </a>
        
        {/* Navigation Items */}
        <div className="text-xl p-2 rounded-xl font-bold group hover:bg-yellow-500 text-gray-800 mb-6 flex flex-col items-center">
          <FaTicket className="mr-2 text-yellow-500 group-hover:text-white" />
          <span className="md:block">Hall Tickets</span>
        </div>
        
        {/* Add New Button */}
        <button className="flex items-center bg-yellow-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-yellow-600 w-full">
          <FaPlus className="mr-2" />
          Add New
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
