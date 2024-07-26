
import React from "react";
import Editsimcomponent from "@/components/telecom/sim/editsim";


function Editsim({params, searchParams:dataform}) {
  console.log(dataform);
 
  return (
    <>
    {/* <h2>Editsim Home Page! {params.id}   </h2>
    <p><span> service number:</span>{dataform?.["service-number"]}</p>
    <p><span> account number:</span>{dataform?.["account-number"]}</p>
    <p><span> plan:</span>{dataform?.plan}</p>
    <p><span> emp number:</span>{dataform?.["emp-number"]}</p>
    <p><span> employee name:</span>{dataform?.["employee-name"]}</p>
    <p><span> credit limit:</span>{dataform?.["credit-limit"]}</p>
    <p><span> department:</span>{dataform?.department}</p>
    <p><span> section:</span>{dataform?.section}</p>
    <p><span> location:</span>{dataform?.location}</p>
    <p><span> coordinator:</span>{dataform?.["coordinator"]}</p>  
    <p><span> purchase date:</span>{dataform?.["purchasedate"]}</p>
    <p><span> notes:</span>{dataform?.notes}</p> */}
    <Editsimcomponent dataform = {dataform}/>
  
    </>
  )
}

export default Editsim