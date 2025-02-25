import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 px-6 text-center md:text-left">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Pragya */}
        <div>
          <h2 className="text-xl font-semibold text-white">About Pragya</h2>
          <p className="mt-2 text-sm">
            Pragya is an innovative Learning Management System designed to enhance education with interactive courses, real-time tracking, and seamless collaboration.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white">Quick Links</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Courses</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold text-white">Contact</h2>
          <p className="mt-2 text-sm">Email: support@pragya.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-sm text-gray-500 text-center">
        &copy; {new Date().getFullYear()} Pragya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
