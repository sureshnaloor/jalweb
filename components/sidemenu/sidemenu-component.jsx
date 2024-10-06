"use client";

import React from "react";
import Link from "next/link";

import clsx from "clsx";
import { usePathname } from "next/navigation";

function Homesidemenu({ primarymenuitems }) {
  const pathname = usePathname();
  const subpath =
    "/" +
    pathname.split("/")[1] +
    "/" +
    pathname.split("/")[2] +
    "/" +
    pathname.split("/")[3];
  console.log(subpath);
  return (
    <div>
      <div className="flex flex-col justify-around gap-4  mt-24 pl-3 font-semibold text-[12px] tracking-wider ">
        {primarymenuitems.map((item, index) => (
          <div
            className={clsx(
              `flex items-center justify-between text-stone-500 hover:text-stone-700 hover:font-bold transition duration-75 rounded-lg hover:bg-gray-100 cursor-pointer`,
              {
                [`text-white bg-blue-300 hover:bg-blue-400 font-semibold text-[12px] px-1 py-2 rounded-md shadow-md`]:
                  pathname === item.link || subpath === item.link,
              }
            )}
            key={index}
          >
            <Link href={item.link}> {item.name} </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homesidemenu;
