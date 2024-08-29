import React, { useState } from "react";
import { Link } from "react-router-dom";
import profile from '../assets/profile.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="/path-to-your-logo.png"
            alt="Job Buddy Logo"
            className="h-8"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div className={`flex space-x-6 lg:flex ${isMenuOpen ? "block" : "hidden"} lg:block`}>
          <Link to="/overview" className="text-gray-700 text-sm hover:text-blue-500">
            Overview
          </Link>
        
          <Link to="/application-status" className="text-gray-700 text-sm hover:text-blue-500">
            Application Status
          </Link>
          
          <Link to="/interviews" className="text-gray-700 text-sm hover:text-blue-500">
            Explore Interviews
          </Link>
          <Link to="/upskill" className="text-gray-700 text-sm hover:text-blue-500">
            Upskill
          </Link>
         
          <Link to="/tools" className="text-gray-700 text-sm hover:text-blue-500">
            Tools
          </Link>
          <Link to="/blog" className="text-gray-700 text-sm hover:text-blue-500">
            Blog
          </Link>
        </div>

        {/* Post Job and Profile Section */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="bg-blue-100 text-blue-500 text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-200">
            + Schedule a mock Interview
          </button>
          <div className="relative flex items-center">
            <img
              src={profile}
              alt="User Avatar"
              className="h-8 w-8 rounded-full"
            />
            <span className="ml-2 text-gray-700 text-sm">User</span>
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md py-2 hidden group-hover:block">
              <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                View Profile
              </Link>
              <Link to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Logout
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <Link to="/overview" className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-200">
              Overview
            </Link>
            <Link to="/application-status" className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-200">
              Application Status
            </Link>
            <Link to="/interviews" className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-200">
              Interviews
            </Link>
            <Link to="/upskill" className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-200">
              Upskill
            </Link>
            <Link to="/tools" className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-200">
              Tools
            </Link>
            <Link to="/blog" className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-200">
              Blog
            </Link>
            <button className="block bg-blue-100 text-blue-500 text-sm font-medium w-full text-left px-4 py-2 rounded-full hover:bg-blue-200 mt-2">
              + Schedule a mock Interview
            </button>
            <div className="relative flex items-center mt-4">
              <img
                src={profile}
                alt="User Avatar"
                className="h-8 w-8 rounded-full"
              />
              <span className="ml-2 text-gray-700 text-sm">User</span>
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md py-2">
                <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  View Profile
                </Link>
                <Link to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
