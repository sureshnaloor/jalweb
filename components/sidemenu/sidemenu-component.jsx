"use client";

import React from "react";
import Link from "next/link";

import clsx from "clsx";
import { usePathname } from "next/navigation";



function Homesidemenu({ primarymenuitems }) {
  const pathname = usePathname()
  // console.log("localhost:3000" + pathname);
  return (
    <div >
      <div className="flex flex-col justify-around gap-4  mt-24 pl-3 font-semibold text-[12px] tracking-wider ">
        {primarymenuitems.map((item, index) => (
          <div
            className={clsx(`flex items-center justify-between`,
              { [` text-stone-500 font-bold text-13px] border-b-[1px] border-b-stone-100 `]: pathname === item.link },
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
