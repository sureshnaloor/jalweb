"use client";

import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import Textinput from "@/components/inputs/textInput";
import TextareaInputcomponent from "@/components/inputs/textareaInput";
import Numberinput from "@/components/inputs/numberInput";
import SelectInput from "@/components/inputs/selectInput";
import Dateinput from "@/components/inputs/dateInput";
import Radioinput from "@/components/inputs/radioInput";
import { CircleX, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import ReadonlyDisplay from "@/components/inputs/readonlyDisplay";


function AddRouter() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors, touchedFields },
  } = useForm({ mode: "onChange" });
  // console.log(errors);

  const router = useRouter();
  const redirect = (url) => {
    router.push(url);
  };  

  // const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    // setLoading(true);
   
    try {
      data = {...data, type: "ROUTER"};
      console.log(data); 
      await fetch("/api/telecom/router", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (Response.ok) {
        console.log("success", data);
        // setLoading(false);
        router.push("/telecom/router");
      }
    reset();
    } catch (error) {
      console.log(error);
      // setLoading(false);
    }
    
  };
  // console.log(watch("name"));

  const planchoice = [
    { value: "", label: "Select Plan" },
    { value: "249", label: "249 SAR/Monthly Bill" },
    { value: "350", label: "350 SAR/Monthly Bill" },
    { value:"400", label: "400 SAR/Monthly Bill" },
    
  ];

  const departmentchoice = [
    { value: "", label: "Select Department" },
    { value: "MM", label: "MMD" },
    { value: "FI", label: "FINANCE" },
    { value: "ES", label: "ESD" },
    { value: "IT", label: "ITD" },
    { value: "HR", label: "HRD" },
    { value: "IS", label: "ISD" },
    { value: "MG", label: "Management" },
  ];

  const sectionchoice = [
    { value: "", label: "Select Section" },
    { value: "IT", label: "IT" },
    { value: "HR-admin", label: "HR-Admin" },
    { value: "HR-recruitment", label: "HR-Recruitment" },
    { value: "HR-GR", label: "HR-Government Representative" },
    { value: "IS-est", label: "ISD-estimation" },
    { value: "IS-operations", label: "ISD-operations" },
    { value: "IS-project", label: "ISD-project" },
    
    { value: "MM-procurement", label: "MMD-procurement" },
    { value: "MM-warehouse", label: "MMD-warehouse" },
    { value: "ES-est", label: "ESD-estimation" },
    { value: "ES-operations", label: "ESD-operations" },
    { value: "ES-project", label: "ESD-project" },
    { value: "FI-est", label: "FID-estimation" },
    
    { value: "FI", label: "FI" },
    { value: "MG-Quality", label: "Quality & Safety" },
    { value: "MG-Management", label: "MGD-Management" },
  ];

  const locationchoice = [
    { value: "", label: "Select Location" },
    { value: "Dammam", label: "Dammam" },
    { value: "Khobar", label: "Khobar" },
    { value: "Jubail", label: "Jubail" },
    { value: "ESD Project", label: "ESD Project" },
    { value: "ISD Project", label: "ISD Project" },
    { value: "John Hopkins", label: "John Hopkins" },
    { value: "temp custody", label: "temp custody MMD" },
    { value: "temp custody", label: "temp custody ISD" },
    { value: "temp custody", label: "temp custody ESD" },
  ];

  const coordinatorchoice = [
    { value: "", label: "Select Coordinator" },
    { value: "ESD-Waseem Muhammad", label: "ESD-Waseem Muhammad" },
    { value: "ISD-Kumar Lama", label: "ISD-Kumar Lama" },
    { value: "MMD-Arnel Balena", label: "MMD-Arnel Balena" },
    { value: "FI-Asif Iqbal", label: "FI-Asif Iqbal" },
    { value: "IT-Kashif", label: "IT-Kashif" },
    { value: "HRD-Gyanendra Adhikari", label: "HRD-Gyanendra Adhikari" },
    { value: "JH-Aftab", label: "JH-Aftab" },
  ];

  const mincontractchoice = [
    { value: "", label: "Select Min Contract Period" },
    { value: "12", label: "12 Month" },
    { value: "24", label: "24 Month" },
    { value: "36", label: "36 Month" },
   
  ];

  return (
    <div className="w-full pb-12 bg-stone-100 max-w-5xl mt-1 mx-auto max-h-[900px] border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
      {" "}
      <div className="flex  bg-stone-200 justify-between w-full mb-2 pl-3 py-1  shadow shadow-gray-300 border-b-2 border-blue-100 rounded-lg">
      <h2 className="text-[14px] font-bold text-gray-900 dark:text-stone-500">
        Add New Router.<span className="text-blue-500 text-[12px]"><Plus /></span>
      </h2>
      <CircleX  className="text-red-500 cursor-pointer" onClick={() => redirect("/telecom/router")} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 sm:grid-cols-4">
         
          <div className="col-span-1">
            <ReadonlyDisplay
              readonlydata="Router"
              label="Type:"
              
            />
            </div>

          <div className="col-span-1">
            <Textinput
              register={register}
              errors={errors}
              touchedfields={touchedFields}
              watch={watch}
              label="Service Number:"
              name="service_number"
              isRequired="this is mandatory field"
              isofPattern={/^[0-9\s]+$/}
              placeholder="Type Service Number"
              autocomplete="service_number"
              minlengthVal={9}
              maxlengthVal={12}
              labelcolor="text-sky-500 dark:text-sky-200"
            />
          </div>

          <div className="col-span-1">
            <Textinput
              register={register}
              errors={errors}
              touchedfields={touchedFields}
              watch={watch}
              label="Account Number:"
              name="account_number"
              isRequired="this is mandatory field"
              isofPattern={/^[0-9\s]+$/}
              placeholder="Type Account Number"
              autocomplete="account_number"
              minlengthVal={11}
              maxlengthVal={11}
            />{" "}
          </div>

          <div className="col-span-1">
            <SelectInput
              register={register}
              errors={errors}
              label="Monthly Bill"
              name="plan"
              choice={planchoice}
              labelcolor="text-sky-500 dark:text-sky-200"
            />
          </div>

          

          <div className="col-span-1">
            <Textinput
              register={register}
              errors={errors}
              touchedfields={touchedFields}
              watch={watch}
              label="Name of custodian:"
              name="employee_name"
              isRequired="this is mandatory field"
              isofPattern={/^[a-zA-Z0-9\s]+$/}
              placeholder="Type Employee Name"
              autocomplete="employee_name"
              minlengthVal={10}
              maxlengthVal={40}
              
            />{" "}
          </div>  
          
          
          {/* select input */}
          <div className="col-span-1">
            <SelectInput
              register={register}
              errors={errors}
              label="Department"
              name="department"
              choice={departmentchoice}
              labelcolor="text-sky-500 dark:text-sky-200"
            />
          </div>

          <div className="col-span-1">
            <SelectInput
              register={register}
              errors={errors}
              label="Section"
              name="section"
              choice={sectionchoice}
              
            />
          </div>

          <div className="col-span-1">
            <SelectInput
              register={register}
              errors={errors}
              label="Location"
              name="location"
              choice={locationchoice}
              labelcolor="text-sky-500 dark:text-sky-200"
            />
          </div>

          <div className="col-span-1">
            <Textinput
              register={register}
              errors={errors}
              touchedfields={touchedFields}
              watch={watch}
              label="Project site:"
              name="projectsite"
              isRequired="this is mandatory field"
              isofPattern={/^[a-zA-Z0-9\s]+$/}
              placeholder="Type name of project site where used.."
              autocomplete="projectsite"
              minlengthVal={10}
              maxlengthVal={40}
              
            />{" "}
          </div>  

          <div className="col-span-1">
          <SelectInput
                register={register}
                errors={errors}
                label="Coordinator"
                name="coordinator"
                choice={coordinatorchoice}
                 labelcolor="text-sky-500 dark:text-sky-200"
              />
          </div>
          <div className="sm:col-span-1">
            <Dateinput
              register={register}
              errors={errors}
              label="Purchase Date:"
              name="purchasedate"
              minval="2022-01-01"
              maxval = "2025-12-31"
              watch={watch}         
                          />
          </div>

          <div className="col-span-1">
            <SelectInput
              register={register}
              errors={errors}
              label="Minimum Contract Period (Months)"
              name="mincontract"
              choice={mincontractchoice}
              labelcolor="text-sky-500 dark:text-sky-200"
              
            />
          </div>
                
          
          <div className="sm:col-span-1 pb-3">            
            <Textinput
                register={register}
                errors={errors}
                touchedfields={touchedFields}
                watch={watch}
                label="SIM Number:"
                name="simnumber"
                isRequired="this is mandatory field"
                isofPattern={/^[a-zA-Z0-9\s]+$/}
                placeholder="Type SIM Number"
                autocomplete="simnumber"
                minlengthVal={10}
                maxlengthVal={14}             
                                />
            </div> 
            <hr className="col-span-4 border-gray-200 dark:border-gray-700 border-2" />
          <div className="sm:col-span-2 pb-3">
            
            <TextareaInputcomponent
              register={register}
              errors={errors}
              touchedfields={touchedFields}
              watch={watch}
              label="Notes"
              name="notes"
              isRequired="this is mandatory field"
              isofPattern={/^[a-zA-Z0-9\s]+$/}
              placeholder="Type description here"
              minlengthVal={20}
              maxlengthVal={200}
               labelcolor="text-cyan-500 dark:text-cyan-200"
            />
          </div> 

         

          {/* radio button here */}
        </div>
        <div className="mt-3 w-1/2 mx-auto">
          <button
            type="submit"
            className={`w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800${null}`}
          >
            {" "}
            Add the router
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRouter;
