"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Textinput from "@/components/inputs/textInput";
import TextareaInputcomponent from "@/components/inputs/textareaInput";
import Numberinput from "@/components/inputs/numberInput";
import SelectInput from "@/components/inputs/selectInput";
import Dateinput from "@/components/inputs/dateInput";
import Radioinput from "@/components/inputs/radioInput";
import { CircleX, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import ReadonlyDisplay from "@/components/inputs/readonlyDisplay";
// import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

function Editsimcomponent({ dataform }) {
  const router = useRouter();
  const redirect = (url) => {
    router.push(url);
    router.refresh();
  };

  // const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      service_number: dataform?.["service-number"],
      account_number: dataform?.["account-number"],
      plan: dataform?.plan,
      emp_number: dataform?.["emp-number"],
      employee_name: dataform?.["employee-name"],
      credit_limit: dataform?.["credit-limit"],
      department: dataform?.department,
      section: dataform?.section,
      location: dataform?.location,
      coordinator: dataform?.["coordinator"],
      purchasedate: dataform?.["purchasedate"]
        ? dataform?.["purchasedate"].split("T")[0]
        : "",
      notes: dataform?.notes,
    },
  });

  const onSubmit = async (data) => {
    const notify = () =>
      // toast(
      //   `Simcard ${dataform?.["service-number"]} has been updated successfully.`
      // );
      Swal.fire({
        customClass: {
          title: "text-[12px] text-red-900",
          icon: "text-[9px] text-red-900",
          confirmButton: "text-[12px] text-white",
        },
        title: `Simcard record number <span class="font-bold text-blue-400">${dataform?.["service-number"]}</span> has been updated.`,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    // setLoading(true);
    try {
      data = { ...data, type: "MOBILE", oldtype: dataform?.type, olddepartment: dataform?.department, oldsection: dataform?.section, oldlocation: dataform?.location, oldplan: dataform?.plan, oldaccount_number: dataform['account-number'], oldemployee_name: dataform["employee-name"],oldemp_number: dataform["emp-number"], oldpurchasedate: dataform?.purchasedate, oldnotes: dataform?.notes, oldservice_number: dataform["service-number"] };
      // console.log(data);
      await fetch("/api/telecom/simcard", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      notify();
      setTimeout(() => {
        redirect("/telecom/simcards/view");
      }, 2000);
    } catch (error) {
      // setLoading(false);
      // console.log(error);
    }

    reset({
      service_number: null,
      account_number: null,
      plan: null,
      emp_number: null,
      employee_name: null,
      credit_limit: null,
      department: null,
      section: null,
      location: null,
      coordinator: null,
      purchasedate: null,
      notes: null,
    });

    // router.push("/telecom/simcard");
  };

  const planchoice = [
    { value: "", label: "Select Plan" },
    { value: "BN50", label: "BN50" },
    { value: "BN80", label: "BN80" },
    
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
   

  return (
    <>
      <div className="w-full pb-12 bg-stone-100 max-w-5xl mt-1 mx-auto max-h-[900px] border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        
        <div className="flex  bg-stone-200 justify-between w-full mb-2 pl-3 py-1  shadow shadow-gray-300 border-b-2 border-blue-100 rounded-lg">
          <h2 className="text-[14px] font-bold text-gray-900 dark:text-stone-500">
            Edit existing Simcard.
            <span className="text-blue-500 text-[12px]">
              <Plus />
            </span>
          </h2>
          <CircleX
            className="text-red-500 cursor-pointer"
            onClick={() => redirect("/telecom/simcard")}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 sm:grid-cols-4">
            <div className="col-span-1">
              <ReadonlyDisplay readonlydata="Mobile SIM" label="Type:" />
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
                maxlengthVal={9}
                labelcolor="text-sky-500 dark:text-sky-200"
                readonly={true}
              />{" "}
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
                minlengthVal={10}
                maxlengthVal={11}
              />{" "}
            </div>

            <div className="col-span-1">
              <SelectInput
                register={register}
                errors={errors}
                label="Plan"
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
                label="Employee Number:"
                name="emp_number"
                isRequired="this is mandatory field"
                isofPattern={/^[0-9\s]+$/}
                placeholder="Type the employee number"
                autocomplete="emp_number"
                minlengthVal={1}
                maxlengthVal={8}
              />{" "}
            </div>

            <div className="col-span-1">
              <Textinput
                register={register}
                errors={errors}
                touchedfields={touchedFields}
                watch={watch}
                label="Employee Name:"
                name="employee_name"
                isRequired="this is mandatory field"
                isofPattern={/^[a-zA-Z0-9\s]+$/}
                placeholder="Type Employee Name"
                autocomplete="employee_name"
                minlengthVal={10}
                maxlengthVal={40}
                labelcolor="text-sky-500 dark:text-sky-200"
              />{" "}
            </div>
            {/* number input  */}
            <div className="sm:col-span-1">
              <Numberinput
                register={register}
                label="Credit Limit in SAR"
                name="credit_limit"
                placeholder="type credit limit here"
                minval={50}
                maxval={400}
                errors={errors}
                watch={watch}
              />
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
             
               <SelectInput
                register={register}
                errors={errors}
                label="Coordinator"
                name="coordinator"
                choice={coordinatorchoice}
              />

            </div>
            <div className="sm:col-span-1">
              <Dateinput
                register={register}
                errors={errors}
                label="Purchase Date:"
                name="purchasedate"
                minval="2022-01-01"
                maxval="2025-12-31"
                watch={watch}
                labelcolor="text-sky-500 dark:text-sky-200"
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
                labelcolor="text-cyan-500 dark:cyan-200"
              />
            </div>

            {/* radio button here */}
          </div>
          <div className="mt-3 w-1/2 mx-auto">
            <button
              type="submit"
              className={`w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              {" "}
              Edit the simcard
            </button>
          </div>
        </form>
        <div className="mt-12 w-1/2 mx-auto">
          {/* <Toaster
            toastOptions={{
              className: "",
              style: {
                border: "1px solid #f17346",
                padding: "8px",
                color: "#111200",
                backgroundColor: "#dde5f0",
                fontSize: "12px",
                fontWeight: "bold",
                fontStyle: "italic",
                boxShadow: "0 0 10px #f17346",
              },
            }}
          /> */}
        </div>
      </div>
    </>
  );
}

export default Editsimcomponent;
