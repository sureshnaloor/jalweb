"use client";

import React from "react";
import { Trash } from "lucide-react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";


function deleterouter(servicenumber, router) {
  console.log(servicenumber);

  Swal.fire({
    width: "500px",
    title: `Are you sure to delete router with service number <span class="font-bold text-sky-900">${servicenumber}</span>?`,
    customClass: {
      title: "m-0 p-0 text-[12px]",

      icon: "text-[8px]",
      confirmButton: "mx-6 px-3 text-[12px]",
      cancelButton: "mx-6 px-3 text-[12px]",
    },

    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await fetch(`/api/telecom/router`, {
        method: "DELETE",
        body: JSON.stringify(servicenumber),
        headers: {
          "Content-Type": "application/json",
        },
      });

      Swal.fire({
        customClass: {
          title: "text-[12px] text-red-900",
          icon: "text-[9px] text-red-900",
          confirmButton: "text-[12px] text-white",
        },
        title: `Router record number <span class="font-bold text-blue-400">${servicenumber}</span> has been deleted.`,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,

        icon: "success",
      });
      router.push("/telecom/router/view");
      router.refresh();
    }
  });

  
}

function Deleterouter({ todeletedata }) {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => deleterouter(todeletedata["service-number"], router)}
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline text-sm"
      >
        <Trash className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 w-3 cursor-pointer" />
      </button>
    </div>
  );
}

export default Deleterouter;
