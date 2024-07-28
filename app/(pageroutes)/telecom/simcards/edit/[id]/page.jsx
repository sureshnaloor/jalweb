
import React from "react";
import Editsimcomponent from "@/components/telecom/sim/editsim";


function Editsim({params, searchParams:dataform}) {
  console.log(dataform);
 
  return (
    <>
   
    <Editsimcomponent dataform = {dataform}/>
  
    </>
  )
}

export default Editsim