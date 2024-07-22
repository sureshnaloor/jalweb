import clientPromise from "@/lib/mongoconnect";
import Link from "next/link";
import SearchComponent from "@/components/ui/utility/Search";

const Simcards = async ({searchParams}) => {
  const query = searchParams?.query || "1234567890";
  const client = await clientPromise;
  const db = client.db("assetmanage");
  const simrecords = await db.collection("sim").find({"service-number": {$regex: query, $options: "i"}}).toArray();

  return (
    <>
    <SearchComponent/>
    <div >
      <table className="text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 border-collapse border">
        <thead className="text-[9px] italic text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
          <tr>
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
              className="px-2 py-3 min-w-[200px] max-w-[200px] whitespace-nowrap"
            >
              Emp. No. & Name
            </th>
            <th
              scope="col"
              className="px-2 min-w-[200px] max-w-[200px] py-3 whitespace-nowrap"
            >
              Coordinator
            </th>

            <th
              scope="col"
              className="px-2 py-3 min-w-[200px] max-w-[200px] whitespace-nowrap"
            >
              Department, Location & Section
            </th>

            <th
              scope="col"
              className="px-2 py-3 min-w-[200px] max-w-[200px] whitespace-nowrap"
            >
              Credit Limit / Plan
            </th>

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
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          {simrecords.length > 0 ? (
            simrecords.map((simrecord) => (
              <tr
                key={simrecord._id}
                className="odd:bg-white odd:dark:bg-gray-900 min-w-[1100] max-w-[1100px] even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-2 py-4 min-w-[100px] max-w-[100px] whitespace-nowrap tracking-wider font-semibold italic text-[10px]">
                  {simrecord["account-number"]}
                </td>
                <td className="px-2 py-4 min-w-[100px] max-w-[100px] whitespace-nowrap font-semibold tracking-wider text-[10px] italic">
                  {simrecord["service-number"]}
                </td>

                <td className="px-2 py-4 min-w-[200px] max-w-[200px] whitespace-nowrap flex flex-col justify-center">
                  <h1 className="text-stone-600 dark:text-stone-200 font-bold">
                    {simrecord["emp-number"]}{" "}
                  </h1>
                  <h2 className="text-stone-400 dark:text-stone-200 font-semibold italic">
                    {" "}
                    {simrecord["employee-name"]}
                  </h2>
                </td>

                <td className="px-2 py-4 min-w-[200px] max-w-[200px] whitespace-nowrap">
                  {simrecord.coordinator}
                </td>

                <td className="px-2 py-4 min-w-[200px] max-w-[200px] whitespace-nowrap flex flex-col justify-center">
                  <h1 className="text-stone-600 dark:text-stone-200 font-bold">
                    {simrecord.department}{" "}
                  </h1>{" "}
                  <h2 className="text-stone-400 dark:text-stone-200 font-semibold italic">
                    {" "}
                    {simrecord.location}{" "}
                  </h2>{" "}
                  <h2 className="text-stone-600 dark:text-stone-200">
                    {" "}
                    {simrecord.section}
                  </h2>
                </td>

                <td className="px-2 py-4 min-w-[200px] max-w-[200px] whitespace-nowrap">
                  <h1>{simrecord.credit_limit?.toString()} </h1>{" "}
                  <h2> {simrecord.plan} </h2>
                </td>

                <td className="px-2 py-4 min-w-[100px] max-w-[100px] whitespace-nowrap ">
                  <h2 className="font-stone-800 italic text-[10px]">
                    {simrecord.type}
                  </h2>
                </td>
                <td className="px-2 py-4 min-w-[100px] max-w-[100px] whitespace-nowrap ">
                  <Link
                    href={`/telecom/simcard/view/${simrecord.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View
                  </Link>
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

export default Simcards;
