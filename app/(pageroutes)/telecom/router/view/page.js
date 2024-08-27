import clientPromise from "@/lib/mongoconnect";
import Link from "next/link";

import { Pencil, Trash, Eye } from "lucide-react";
// import Viewrecords from "@/components/telecom/router/viewrecords";
import Deleterouter from "@/components/telecom/router/deleterecords";

const Routerrecords = async () => {
  const client = await clientPromise;
  const db = client.db("assetmanage");
  const routerecords = await db
    .collection("telecom")
    .find({ type: "ROUTER" })
    .toArray();

    console.log(routerecords[0]["service-number"]);

  return (
    <>
      <div>
        <div> {routerecords[0]["service-number"]}</div>
        <table className="text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 border-collapse border">
          <thead className="text-[9px] italic text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>

            <th
                scope="col"
                className="px-2 py-3 min-w-[100px] max-w-[100px] whitespace-nowrap"
              >
                Type
              </th>
              <th
                scope="col"
                className="px-2 py-3 min-w-[100px] max-w-[100px] whitespace-nowrap"
              >
                Acc. No.
              </th>
              <th
                scope="col"
                className="px-2 py-3 min-w-[100px] max-w-[100px] whitespace-nowrap"
              >
                Service Number
              </th>
              <th
                scope="col"
                className="px-2 py-3 min-w-[150px] max-w-[150px] whitespace-nowrap"
              >
                Emp Name
              </th>
              <th
                scope="col"
                className="px-2 min-w-[150px] max-w-[150px] py-3 whitespace-nowrap"
              >
                Coordinator
              </th>

              <th
                scope="col"
                className="px-2 py-3 min-w-[150px] max-w-[150px] whitespace-nowrap"
              >
                Department, <br />
                Location <br /> & Section
              </th>             

              <th
                scope="col"
                className="px-2 py-3 min-w-[150px] max-w-[150px] whitespace-nowrap"
              >
                Min Contract Duration <br /> Monthly plan (SAR)
              </th>             

              <th
                scope="col"
                className="px-2 py-3 min-w-[100px] max-w-[100px] whitespace-nowrap"
              >
                SIM Serial#
              </th>

              <th
                scope="col"
                className="px-2 py-3 min-w-[100px] max-w-[100px] whitespace-nowrap"
              >
                Date purchased:
              </th>
              <th
                scope="col"
                className="px-2 py-3 min-w-[100px] max-w-[100px] whitespace-nowrap"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            {routerecords.length > 0 ? (
              routerecords.map((routerecord) => (
                <tr
                  key={routerecord._id}
                  className="odd:bg-white odd:dark:bg-gray-900 min-w-[1100] max-w-[1100px] even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-2 py-4 min-w-[100px] max-w-[100px] whitespace-nowrap ">
                    <h2 className="font-stone-800 italic text-[10px] font-bold tracking-wider">
                      {routerecord.type}
                    </h2>
                  </td>
                  <td className="px-2 py-4 min-w-[100px] max-w-[100px] whitespace-nowrap tracking-wider font-semibold italic text-[10px]">
                    {routerecord["account-number"]}
                  </td>
                  <td className="px-2 py-4 min-w-[100px] max-w-[100px] whitespace-nowrap font-semibold tracking-wider text-[10px] italic">
                    {routerecord["service-number"]}
                  </td>

                  <td className="px-2 py-4 min-w-[150px] max-w-[150px] whitespace-nowrap">
                    <h2 className="text-stone-400 dark:text-stone-200 font-semibold italic">
                      {" "}
                      {routerecord["employee-name"]}
                    </h2>
                  </td>

                  <td className="px-2 py-4 min-w-[150px] max-w-[150px] whitespace-nowrap">
                    {routerecord.coordinator}
                  </td>

                  <td className="px-2 py-4 min-w-[100px] max-w-[100px] whitespace-nowrap flex flex-col justify-center">
                    <h1 className="text-stone-600 dark:text-stone-200 font-bold">
                      {routerecord.department}{" "}
                    </h1>{" "}
                    <h2 className="text-stone-400 dark:text-stone-200 font-semibold italic">
                      {" "}
                      {routerecord.location}{" "}
                    </h2>{" "}
                    <h2 className="text-stone-600 dark:text-stone-200">
                      {" "}
                      {routerecord.section}
                    </h2>
                  </td>

                  <td className="px-2 py-4 min-w-[150px] max-w-[150px] whitespace-nowrap ">
                    <h2 className="font-stone-800 italic text-[10px] font-bold tracking-wider">
                      {routerecord.mincontract} <span className="text-stone-400 dark:text-stone-200 font-semibold italic"> Months</span>
                    </h2>               
                  
                    <h2 className="font-stone-800 italic text-[10px] font-bold tracking-wider">
                      {routerecord.plan} <span className="text-stone-400 dark:text-stone-200 font-semibold italic"> SAR/Month</span>
                    </h2>
                  </td>

                  <td className="px-2 py-4 min-w-[100px] max-w-[100px] whitespace-nowrap ">
                    <h2 className="font-stone-800 italic text-[10px] font-bold tracking-wider">
                      {routerecord.simnumber}
                    </h2>
                  </td>

                  <td className="px-2 py-4 min-w-[100px] max-w-[100px] whitespace-nowrap ">
                    <h2 className="font-stone-800 italic text-[10px]">
                      {routerecord["purchasedate"]
                        ? routerecord["purchasedate"].split("T")[0]
                        : null}
                    </h2>
                  </td>

                  <td className="px-2 py-4 min-w-[100px] max-w-[100px] whitespace-nowrap ">
                    <div className="flex justify-start items-center gap-3">
                      <Link
                        href={{pathname: `/telecom/router/edit/${routerecord._id}`, query: {type: routerecord.type, department: routerecord.department, section: routerecord.section, location: routerecord.location, plan: routerecord.plan,  purchasedate: routerecord.purchasedate, "account-number": routerecord["account-number"], "service-number": routerecord["service-number"], "employee-name": routerecord["employee-name"], coordinator: routerecord.coordinator, notes: routerecord.notes, mincontract: routerecord.mincontract, projectsite: routerecord.projectsite, simnumber: routerecord.simnumber}}} 
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <Pencil className="text-green-500 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 w-3 cursor-pointer" />
                      </Link>
                      
                      <Deleterouter todeletedata={{"service-number": routerecord["service-number"]}} /> 
                      <div
                        // href={`/telecom/router/view/${simrecord._id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <Eye className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 w-3 cursor-pointer" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="animate-pulse bg-gray-100 dark:bg-gray-800 border-b text-gray-300">
                <td className="px-2 py-4 min-w-[100px] max-w-[100px] whitespace-nowrap tracking-wider font-semibold italic text-[10px]">
                  <h1 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></h1>
                </td>
                <td className="px-2 py-4 min-w-[100px] max-w-[100px] whitespace-nowrap font-semibold tracking-wider text-[10px] italic">
                  <h1 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></h1>
                </td>

                <td className="px-2 py-4 min-w-[200px] max-w-[200px] whitespace-nowrap flex flex-col justify-center">
                  <h1 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></h1>
                </td>

                <td className="px-2 py-4 min-w-[200px] max-w-[200px] whitespace-nowrap">
                  <h1 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></h1>
                </td>
                <td className="px-2 py-4 min-w-[200px] max-w-[200px] whitespace-nowrap flex flex-col justify-center">
                  <h1 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></h1>
                </td>

                <td className="px-2 py-4 min-w-[200px] max-w-[200px] whitespace-nowrap">
                  <h1 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></h1>
                </td>
                <td className="px-2 py-4 min-w-[100px] max-w-[100px] whitespace-nowrap font-semibold tracking-wider text-[10px] italic">
                  <h1 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></h1>
                </td>
                <td className="px-2 py-4 min-w-[100px] max-w-[100px] whitespace-nowrap font-semibold tracking-wider text-[10px] italic">
                  <h1 className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></h1>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Routerrecords;
