import React from 'react'
import SearchComponent from "@/components/ui/utility/Search";

function Viewrouter() {
  return (
    <div>
      <div className="flex items-center justify-center gap-9  w-full  mb-2 mt-3">
        <SearchComponent query="router" paramname="router" label="Router No." />
        <SearchComponent
          query="empname"
          paramname="empname"
          label="Emp. Name."
        />
      </div>
    </div>
  )
}

export default Viewrouter