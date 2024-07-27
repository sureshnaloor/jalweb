"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
  Construction,
  House,
  PersonStanding,
  TabletSmartphone,
  Tractor,
  Truck,
  Wrench,
} from "lucide-react";

function Siteheader() {
  const headermenu = [
    { name: "Home", path: "/", icon: House },
    { name: "Materials", path: "/materials", icon: Wrench },
    { name: "Vendors", path: "/vendors", icon: PersonStanding },
    { name: "Purchases", path: "/purchases", icon: Truck },
    { name: "Projects", path: "/projects", icon: Construction },
    { name: "Assets", path: "/assets", icon: Tractor },
    { name: "Telecom", path: "/telecom", icon: TabletSmartphone },
  ];

  const pathname = "/" + usePathname().split("/")[1];
  console.log(pathname);

  return (
    <div>
      <header className="shadow-md  bg-zinc-50 w-full font-[sans-serif]  tracking-wide fixed top-0 z-50 ">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full">
          <div className="flex flex-col items-center w-64 bg-stone-200 ">
            <a href="/">
            <img
          src="/images/logo.jpg"
          alt="logo"
          className="w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full"
        />
            </a>
            <h3 className="text-[10px] font-bold text-zinc-600  shadow-md shadow-stone-300">
              JAL Web
            </h3>
          </div>
          <div>
            <ul className="lg:flex gap-x-12 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              {headermenu.map((item, index) => (
                
                <li  key={index}>
                  <Link href={item.path}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center tracking-widest">
                        <item.icon className="w-3 h-3 mr-2 pb-[1px] text-stone-600" />
                        <span className={clsx(`text-sm font-thin  text-stone-600`,
              { [` text-sky-900 font-bold italic text-[14px]  `]: pathname === item.path },
            )}>
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-2">
            <button className="px-2 py-1 text-[10px] rounded-full font-bold text-white border-2 border-sky-600 bg-sky-800 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
              Login
            </button>
            <button className="px-2 py-1 text-[10px] rounded-full font-bold text-white border-2 border-sky-600 bg-sky-800 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
              Sign up
            </button>

            <button id="toggleOpen" className="lg:hidden">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Siteheader;
