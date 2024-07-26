import React from "react";
import Sidebar from "../components/sidemenu/sidebar";
import { Link } from "lucide-react";

function Mainsidebar() {
  return (
    <div >
      <aside
        id="separator-sidebar"
        className="fixed top-1 left-0 z-40 w-64 h-screen bg-stone-200 flex flex-col justify-between"
        aria-label="Sidebar"
      >
        {/* <div className="px-1 py-1 overflow-y-auto"> */}
          <div>
          <Sidebar  /> </div>
          <div className="tracking-widest">
          <ul className="pb-4 mb-14 mt-9 space-y-2 font-semibold  text-xs  border-t border-gray-200 dark:border-gray-700">
            <li>
              <a
                href="/upgrade"
                className="flex items-center p-1 text-gray-500 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ms-3">Upgrade to Pro</span>
              </a>
            </li>
            <li>
              <a
                href="/documentation"
                className="flex items-center p-1 text-gray-500 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ms-3">Documentation</span>
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="flex items-center p-1 text-gray-500 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ms-3">About Us</span>
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="flex items-center p-1 text-gray-500 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ms-3">Contact Us</span>
              </a>
            </li>
          </ul></div>
        {/* </div> */}
      </aside>
    </div>
  );
}

export default Mainsidebar;
