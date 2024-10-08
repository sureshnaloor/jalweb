import clientPromise from "@/lib/mongoconnect";
import Link from "next/link";
import { Pencil, Trash, Eye } from "lucide-react";
import Viewsim from "@/components/telecom/sim/viewsim";
import Deletesim from "@/components/telecom/sim/deletesim";
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

const Simcards = async ({ searchParams }) => {
  const mobile = searchParams?.mobile || "";
  const empnumber = searchParams?.empnumber || "";

  const client = await clientPromise;
  const db = client.db("assetmanage");
  const simrecords = mobile
    ? await db
        .collection("telecom")
        .find({
          type: "MOBILE",
          "service-number": { $regex: mobile, $options: "i" },
        })
        .toArray()
    : empnumber
    ? await db
        .collection("telecom")
        .find({
          type: "MOBILE",
          "emp-number": { $regex: empnumber, $options: "i" },
        })
        .toArray()
    : await db.collection("telecom").find({ type: "MOBILE" }).toArray();

  return (
    <>
      <Viewsim />
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse border">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">Acc. No.</th>
              <th scope="col" className="px-4 py-3">Mobile Number</th>
              <th scope="col" className="px-4 py-3">Emp. No. & Name</th>
              <th scope="col" className="px-4 py-3">Coordinator</th>
              <th scope="col" className="px-4 py-3">Department, Location & Section</th>
              <th scope="col" className="px-4 py-3">Credit Limit / Plan</th>
              <th scope="col" className="px-4 py-3">Type</th>
              <th scope="col" className="px-4 py-3">Date purchased</th>
              <th scope="col" className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {simrecords.length > 0 ? (
              simrecords.map((simrecord, index) => (
                <tr
                  key={simrecord._id}
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-gray-100 transition-colors duration-200 ease-in-out text-[12px]`}
                >
                  <td className="px-4 py-3">
                    <span className={`${robotoMono.className} font-medium text-gray-800`}>{simrecord["account-number"]}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`${robotoMono.className} font-medium text-blue-600`}>{simrecord["service-number"]}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className={`${robotoMono.className} font-medium text-indigo-600`}>{simrecord["emp-number"]}</span>
                      <span className="text-green-600">{simrecord["employee-name"]}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">{simrecord.coordinator}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="font-semibold">{simrecord.department}</span>
                      <span className="text-gray-600 italic">{simrecord.location}</span>
                      <span>{simrecord.section}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className={`${robotoMono.className} font-medium text-purple-600`}>{simrecord["credit-limit"]}</span>
                      <span className={`${robotoMono.className} font-medium text-orange-600`}>{simrecord.plan}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-semibold text-indigo-600">{simrecord.type}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-gray-700">
                      {simrecord["purchasedate"]
                        ? new Date(simrecord["purchasedate"]).toLocaleDateString()
                        : 'N/A'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <Link
                        href={{
                          pathname: `/telecom/simcards/edit/${simrecord._id}`,
                          query: {
                            type: simrecord.type,
                            department: simrecord.department,
                            section: simrecord.section,
                            location: simrecord.location,
                            plan: simrecord.plan,
                            "credit-limit": simrecord["credit-limit"],
                            purchasedate: simrecord.purchasedate,
                            "account-number": simrecord["account-number"],
                            "service-number": simrecord["service-number"],
                            "emp-number": simrecord["emp-number"],
                            "employee-name": simrecord["employee-name"],
                            coordinator: simrecord.coordinator,
                            notes: simrecord.notes,
                          },
                        }}
                        className="text-green-500 hover:text-green-700"
                      >
                        <Pencil className="w-3 h-3" />
                      </Link>
                      <Deletesim className="text-red-300 hover:text-red-700 w-3 h-3"
                        todeletedata={{
                          "service-number": simrecord["service-number"],
                        }}
                      />
                      <Link
                        href={`/telecom/simcards/view/${simrecord._id}`}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <Eye className="w-3 h-3" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="px-4 py-3 text-center">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Simcards;