import SearchComponent from "@/components/ui/utility/Search";
import Editsimcomponent from "@/components/telecom/sim/editsim";
import clientPromise from "@/lib/mongoconnect";

export default async function Editsim({ searchParams }) {
  // const record = await getData();
  const query = searchParams?.query
  const client = await clientPromise;
  const db = client.db("assetmanage");

  let simrecord = null;
  

  if (query) {  
    simrecord = await db
      .collection("telecom")
      .findOne({ "service-number": query });  
  }
  
    
    
      if (simrecord?.length==0) {   
        return (
          <div> Loading...</div>
        )
      }

      return (
        <>
          <SearchComponent query="mobile" paramname="mobile" label="Mobile No."  /> 
          <div> simrecord: {JSON.stringify(simrecord)}</div>
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
   
  