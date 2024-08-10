import clientPromise from "@/lib/mongoconnect";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const client = await clientPromise;
const db = client.db("assetmanage");


export async function POST(request, response) {
  try {
    const data = await request.json();
    // console.log( data.emp_number, data.service_number, data.account_number, data.employee_name, data.coordinator);
    const simrecord = await db.collection("sim").insertOne({  
      "emp-number": data.emp_number,
      "service-number": data.service_number,
      "account-number": data.account_number,
      "employee-name": data.employee_name,
      coordinator: data.coordinator,
      department: data.department,
      location: data.location,
      section: data.section,
      "credit-limit": data.credit_limit,
      plan: data.plan,
      type: data.type,
      purchasedate: data.purchasedate,
      notes: data.notes,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    revalidatePath("/telecom/simcards/view");
    return NextResponse.json({
      status: "success",
      data: "simcard added successfully",
    });

    
  } catch (error) {
    return NextResponse.json({
      status: "error",
      data: error,
    });
  }
}

export async function PUT(request, response) {
  try {
    const data = await request.json();
    console.log( data.emp_number, data.service_number, data.account_number, data.employee_name, data.coordinator);
    const simrecord = await db.collection("sim").
        updateOne({"service-number": data.service_number}, { 
          $set: {
            "emp-number": data.emp_number,
            "account-number": data.account_number,
            "employee-name": data.employee_name,
            coordinator: data.coordinator,
            department: data.department,
            location: data.location,
            section: data.section,
            "credit-limit": data.credit_limit,
            plan: data.plan,
            type: data.type,
            purchasedate: data.purchasedate,
            notes: data.notes,
            editedAt: new Date(),
            updatedAt: new Date()
          }
        });
     
        revalidatePath("/telecom/simcards/view");
    
    return NextResponse.json({
      status: "success",
      data: "simcard updted successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      data: error,
    });
  }
}

export async function DELETE(request, response) {
  try {
    const data = await request.json();
    console.log(data);
    const simtodelete = await db.collection("sim").findOne({ "service-number": data });


    if (simtodelete) {
      await db.collection("sim").deleteOne({ "service-number": data });
      revalidatePath("/telecom/simcards/view");
      return NextResponse.json({
        status: "success",
        data: "simcard deleted successfully",
      });
    }
   
  } catch (error) {
    return NextResponse.json({
      status: "error",
      data: error,
    });
  }
}
