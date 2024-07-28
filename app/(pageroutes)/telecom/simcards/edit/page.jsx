import SearchComponent from "@/components/ui/utility/Search";
import Editsimcomponent from "@/components/telecom/sim/editsim";
import clientPromise from "@/lib/mongoconnect";

export default async function Editsim({ searchParams }) {
  // const record = await getData();
  const query = searchParams?.query || "123456789";
  const client = await clientPromise;
  const db = client.db("assetmanage");
  const simrecord = await db
    .collection("sim")
    .findOne({ "service-number": query });
  console.log(simrecord);
  return (
    <>
      <div>
        <SearchComponent />
      </div>
      {/* <div> simrecord: {JSON.stringify(simrecord)}</div> */}
      <hr />
      <Editsimcomponent
        dataform={{
          type: simrecord?.type,
          department: simrecord?.department,
          section: simrecord?.section,
          location: simrecord?.location,
          plan: simrecord?.plan,
          "credit-limit": simrecord?.["credit-limit"],
          purchasedate: simrecord?.purchasedate,
          "account-number": simrecord?.["account-number"],
          "service-number": simrecord?.["service-number"],
          "emp-number": simrecord?.["emp-number"],
          "employee-name": simrecord?.["employee-name"],
          coordinator: simrecord?.coordinator,
          notes: simrecord?.notes,
        }}
      />
    </>
  );
}
