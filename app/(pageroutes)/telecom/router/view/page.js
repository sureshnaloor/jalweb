import clientPromise from "@/lib/mongoconnect";
import Link from "next/link";
import { Pencil, Trash, Eye } from "lucide-react";
import Viewrouter from "@/components/telecom/router/viewrecords";
import Deleterouter from "@/components/telecom/router/deleterecords";
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

const Routerrecords = async ({ searchParams }) => {
  const router = searchParams?.router || "";
  const empname = searchParams?.empname || "";
  const client = await clientPromise;
  const db = client.db("assetmanage");
  const routerecords = router
    ? await db
        .collection("telecom")
        .find({
          type: "ROUTER",
          "service-number": { $regex: router, $options: "i" },
        })
        .toArray()
    : empname
    ? await db
        .collection("telecom")
        .find({
          type: "ROUTER",
          "employee-name": { $regex: empname, $options: "i" },
        })
    : await db.collection("telecom").find({ type: "ROUTER" }).toArray();

  console.log(routerecords.length + "is the number of records");

  return (
    <>
      <div>
        <Viewrouter />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse border">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">Type</th>
              <th scope="col" className="px-4 py-3">Acc. No.</th>
              <th scope="col" className="px-4 py-3">Service Number</th>
              <th scope="col" className="px-4 py-3">Emp Name</th>
              <th scope="col" className="px-4 py-3">Coordinator</th>
              <th scope="col" className="px-4 py-3">Department, Location & Section</th>
              <th scope="col" className="px-4 py-3">Min Contract Duration & Monthly plan (SAR)</th>
              <th scope="col" className="px-4 py-3">SIM Serial#</th>
              <th scope="col" className="px-4 py-3">Date purchased</th>
              <th scope="col" className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {routerecords.length > 0 ? (
              routerecords.map((routerecord, index) => (
                <tr
                  key={routerecord._id}
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                  } hover:bg-gray-100 transition-colors duration-200 ease-in-out text-[12px]`}
                >
                  <td className="px-4 py-3">
                    <span className="font-semibold text-indigo-600">{routerecord.type}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`${robotoMono.className} font-medium text-gray-800`}>{routerecord["account-number"]}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`${robotoMono.className} font-medium text-blue-600`}>{routerecord["service-number"]}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-green-600">{routerecord["employee-name"]}</span>
                  </td>
                  <td className="px-4 py-3">{routerecord.coordinator}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="font-semibold">{routerecord.department}</span>
                      <span className="text-gray-600 italic">{routerecord.location}</span>
                      <span>{routerecord.section}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className={`${robotoMono.className} font-medium text-purple-600`}>{routerecord.mincontract} Months</span>
                      <span className={`${robotoMono.className} font-medium text-orange-600`}>{routerecord.plan} SAR/Month</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`${robotoMono.className} font-medium text-red-600`}>{routerecord.simnumber}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-gray-700">
                      {routerecord["purchasedate"]
                        ? new Date(routerecord["purchasedate"]).toLocaleDateString()
                        : 'N/A'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <Link
                        href={{
                          pathname: `/telecom/router/edit/${routerecord._id}`,
                          query: {
                            type: routerecord.type,
                            department: routerecord.department,
                            section: routerecord.section,
                            location: routerecord.location,
                            plan: routerecord.plan,
                            purchasedate: routerecord.purchasedate,
                            "account-number": routerecord["account-number"],
                            "service-number": routerecord["service-number"],
                            "employee-name": routerecord["employee-name"],
                            coordinator: routerecord.coordinator,
                            notes: routerecord.notes,
                            mincontract: routerecord.mincontract,
                            projectsite: routerecord.projectsite,
                            simnumber: routerecord.simnumber,
                          },
                        }}
                        className="text-green-500 hover:text-green-700"
                      >
                        <Pencil className="w-3 h-3" />
                      </Link>
                      <Deleterouter className="text-red-300 hover:text-red-700 w-3 h-3"
                        todeletedata={{
                          "service-number": routerecord["service-number"],
                        }}
                      />
                      <div className="text-blue-500 hover:text-blue-700 cursor-pointer">
                        <Eye className="w-3 h-3" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="px-4 py-3 text-center">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Routerrecords;