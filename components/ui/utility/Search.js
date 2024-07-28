"use client";
import { useDebouncedCallback } from "use-debounce";

import React from "react";
import { Search, Smartphone } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

function SearchComponent() {  
  const searchParams = useSearchParams();
  
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((value) => {      
    const params = new URLSearchParams(searchParams)
    if (value){
        params.set('query', value)
    }
    else {
        params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }     , 300);
 

  return (
    <div>
      <div className="flex items-center max-w-[200px] mx-auto mb-2 mt-3">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">            
            <Smartphone className="w-4 h-4 text-blue-500 dark:text-blue-400" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-blue-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-[3px]"
            placeholder="Mobile Number..."            
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get("query")?.toString()}
          />
           <div className="absolute inset-x-40 inset-y-1">
            <Search className="w-4 h-4 text-blue-500 dark:text-blue-400" />
          </div>
        </div>
       
       
      </div>
    </div>
  );
}

export default SearchComponent;
