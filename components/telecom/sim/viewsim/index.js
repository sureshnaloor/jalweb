"use client";

import React, { useState, useEffect } from "react";
import SearchComponent from "@/components/ui/utility/Search";

function Viewsim() {
    
  return (
    <div>
      <div className="flex items-center justify-center gap-9  w-full  mb-2 mt-3">
        <SearchComponent query="mobile" paramname="mobile" label="Mobile No." />
        <SearchComponent
          query="empnumber"
          paramname="empnumber"
          label="Emp. No."
        />
      </div>
    </div>
  );
}

export default Viewsim;
