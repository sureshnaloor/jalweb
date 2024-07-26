"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Sidemenucomponent from "../sidemenu/sidemenu-component";


function Sidebar() {
  const pathname = usePathname();
  const subpath = pathname.split("/")[1];
  // console.log(subpath)

  const homemenuitems = [
    { name: "Home", link: "/" },
    { name: "Dashboard", link: "/dashboard" },
    { name: "assets", link: "/assets" },
    { name: "materials", link: "/materials" },
    { name: "vendors", link: "/vendors" },
    { name: "purchases", link: "/purchases" },
    { name: "projects", link: "/projects" },
    { name: "telecom", link: "/telecom" },
    { name: "Settings", link: "/settings" },
    { name: "Logout", link: "/logout" },
  ];

  const assetsmenuitems = [
    { name: "Assets", link: "/assets" },
    { name: "New Asset", link: "/assets/new" },
    { name: "Edit Asset", link: "/assets/edit" },
  ];

  const materialsmenuitems = [
    { name: "Materials", link: "/materials" },
    { name: "New Material", link: "/materials/new" },
    { name: "Edit Material", link: "/materials/edit" },
    { name: "Materials Categories", link: "/materials/categories" },
    { name: "purchase orders", link: "/materials/purchaseorders" },
    { name: "projects", link: "/materials/projects" },
    { name: "stocks", link: "/materials/stocks" },
  ];

  const vendorsmenuitems = [
    { name: "Vendors", link: "/vendors" },
    { name: "New Vendor", link: "/vendors/new" },
    { name: "Edit Vendor", link: "/vendors/edit" },
    { name: "Vendors Categories", link: "/vendors/categories" },
    { name: "purchase orders", link: "/vendors/purchaseorders" },
    { name: "projects", link: "/vendors/projects" },
  ];

  const purchasesmenuitems = [
    { name: "Purchase Orders", link: "/purchases" },
    { name: "New Purchase Order", link: "/purchases/new" },
    { name: "Edit Purchase Order", link: "/purchases/edit" },
    { name: "projects", link: "/purchases/projects" },
  ];

  const projectsmenuitems = [
    { name: "Projects", link: "/projects" },
    { name: "New Project", link: "/projects/new" },
    { name: "Edit Project", link: "/projects/edit" },
    { name: "Projects Categories", link: "/projects/categories" },
    { name: "purchase orders", link: "/projects/purchaseorders" },
    { name: "stocks", link: "/projects/stocks" },
    { name: "vendors", link: "/projects/vendors" },
    { name: "materials", link: "/projects/materials" },
  ];

  const telecommenuitems = [
    { name: "Telecom", link: "/telecom/simcard" },
    { name: "+ Add New SIM ", link: "/telecom/simcards/add" },
    { name: "+ Add New Router", link: "/telecom/router/new" },
    { name: "+ Add New Telephone", link: "/telecom/telephone/new" },  
    { name: "  Edit SIM", link: `/telecom/simcard/edit` },
    {name:" View SIM records", link: `/telecom/simcards/view` },
    
  ];

  return (
    <>
      <div >
        <div>
          {(pathname === "/" || subpath == "") && (
            <div>
              <Sidemenucomponent primarymenuitems={homemenuitems} />
            </div>
          )}
          {(pathname === "/assets" || subpath == "assets") && (
            <div>
              <Sidemenucomponent primarymenuitems={assetsmenuitems} />
            </div>
          )}
          {(pathname === "/materials" || subpath == "materials") && (
            <div>
              <Sidemenucomponent primarymenuitems={materialsmenuitems} />
            </div>
          )}
          {(pathname === "/vendors" || subpath == "vendors") && (
            <div>
              <Sidemenucomponent primarymenuitems={vendorsmenuitems} />
            </div>
          )}
          {(pathname === "/purchases" || subpath == "purchases") && (
            <div>
              <Sidemenucomponent primarymenuitems={purchasesmenuitems} />
            </div>
          )}
          {(pathname === "/projects" || subpath == "projects") && (
            <div>
              <Sidemenucomponent primarymenuitems={projectsmenuitems} />
            </div>
          )}

          {(pathname === "/telecom" || subpath == "telecom") && (
            <div>
              <Sidemenucomponent primarymenuitems={telecommenuitems} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
