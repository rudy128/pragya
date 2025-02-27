import { useState } from "react";
import { FaBars, FaTimes, FaRegFileAlt, FaClock, FaFolderOpen, FaArchive, FaStar, FaPlus, FaBook, FaLayerGroup, FaCogs, FaTicketAlt } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <button
//         className="md:hidden p-3 fixed top-4 left-4 z-50 bg-white shadow-lg rounded-full"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed md:relative h-screen w-64 bg-white shadow-lg flex flex-col p-5 transition-transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 z-40`}
//       >
//         {/* Logo */}
//         <div className="text-xl font-bold text-gray-800 mb-6 flex items-center">
//           <FaBook className="mr-2 text-yellow-500" />
//           Learning Content
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1">
//           <ul className="space-y-3">
//             <li className="flex items-center text-gray-700 hover:text-yellow-500 cursor-pointer p-2 rounded-lg">
//               <FaClock className="mr-3 text-gray-500" />
//               Recents
//             </li>
//             <li className="flex items-center text-gray-700 hover:text-yellow-500 cursor-pointer p-2 rounded-lg">
//               <FaRegFileAlt className="mr-3 text-gray-500" />
//               Shared Content
//             </li>
//             <li className="flex items-center text-gray-700 hover:text-yellow-500 cursor-pointer p-2 rounded-lg">
//               <FaArchive className="mr-3 text-gray-500" />
//               Archive
//             </li>
//             <li className="flex items-center text-gray-700 hover:text-yellow-500 cursor-pointer p-2 rounded-lg">
//               <FaFolderOpen className="mr-3 text-gray-500" />
//               Templates
//             </li>
//           </ul>
//         </nav>

//         {/* Favorites Section */}
//         <div className="mt-6">
//           <h3 className="text-sm font-semibold text-gray-600 mb-2 flex items-center">
//             <FaStar className="mr-2 text-yellow-500" />
//             Favorites
//           </h3>
//           <ul className="space-y-2">
//             <li className="flex items-center text-gray-700 hover:text-yellow-500 cursor-pointer p-2 rounded-lg">
//               <FaLayerGroup className="mr-3 text-gray-500" />
//               Figma Basic
//             </li>
//             <li className="flex items-center text-gray-700 hover:text-yellow-500 cursor-pointer p-2 rounded-lg">
//               <FaLayerGroup className="mr-3 text-gray-500" />
//               Assignment 101
//             </li>
//           </ul>
//         </div>

//         {/* Projects Section */}
//         <div className="mt-6">
//           <h3 className="text-sm font-semibold text-gray-600 mb-2 flex items-center">
//             <FaFolderOpen className="mr-2 text-gray-500" />
//             Projects
//           </h3>
//           <ul className="space-y-2">
//             <li className="flex items-center text-gray-700 hover:text-yellow-500 cursor-pointer p-2 rounded-lg">
//               <FaCogs className="mr-3 text-gray-500" />
//               Figma Studio
//             </li>
//           </ul>
//         </div>

//         {/* AI Assistant */}
//         <div className="mt-8 bg-gray-100 p-3 rounded-lg text-center">
//           <p className="text-sm text-gray-700">Use AI in every action with Trening AI</p>
//           <button className="mt-2 bg-yellow-500 text-white px-4 py-1 text-sm rounded hover:bg-yellow-600">
//             Try it now
//           </button>
//         </div>

//         {/* Add New Button */}
//         <button className="flex items-center bg-yellow-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-yellow-600">
//           <FaPlus className="mr-2" />
//           Add New
//         </button>
//       </div>
//     </>
//   );
// };

const Sidebar = () =>{
  const [isHovered, setIsHovered] = useState(false);

  return(
    <aside className={`p-2 w-[15%]`} onMouseEnter={ () => setIsHovered(true) } onMouseLeave={ () => setIsHovered(false)}>
      <a className="text-xl p-2 rounded-xl font-bold group hover:bg-yellow-500 text-gray-800 mb-6 flex flex-col items-center">
        <FaBook className="mr-2 text-yellow-500 group-hover:text-white" />
        <span className={`${isHovered?'':'hidden'}`}>Courses</span>
      </a>
      <div className="text-xl p-2 rounded-xl font-bold group hover:bg-yellow-500 text-gray-800 mb-6 flex flex-col items-center">
        <FaTicket className="mr-2 text-yellow-500 group-hover:text-white" />
        <span className="hidden">Hall Tickets</span>
      </div>
    </aside>
  )
}

export default Sidebar;
