
import React from "react";
import Editroutercomponent from "@/components/telecom/router/editrouter";


function Editrouter({params, searchParams:dataform}) {
  console.log(dataform);
 
  return (
    <>
   
    <Editroutercomponent dataform = {dataform}/>
  
    </>
  )
}

export default Editrouter