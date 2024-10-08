import clientPromise from "@/lib/mongoconnect";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const client = await clientPromise;
const db = client.db("assetmanage");


export async function POST(request, response) {
  try {
    const data = await request.json();
    // console.log( data.emp_number, data.service_number, data.account_number, data.employee_name, data.coordinator);
    const simrecord = await db.collection("telecom").insertOne({  
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
    // console.log( data.emp_number, data.service_number, data.account_number, data.employee_name, data.coordinator);
    const updatedata = {
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
      updatedAt: new Date(),
    };

    const insertdata = {
      "service-number": data.oldservice_number,
      "oldaccount-number": data.oldaccount_number,
      "oldemployee-name": data.oldemployee_name,
      oldcoordinator: data.oldcoordinator,
      olddepartment: data.olddepartment,
      oldlocation: data.oldlocation,
      oldsection: data.oldsection,
      oldplan: data.oldplan,
      oldtype: data.oldtype,
      oldpurchasedate: data.oldpurchasedate,
      oldnotes: data.oldnotes,

      updatedAt: new Date(),
    };

    await db
      .collection("telecom")
      .updateOne(
        { "service-number": data.service_number },
        { $set: updatedata }
      );

    await db.collection("telecomlog").insertOne(insertdata);

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
    const simtodelete = await db.collection("telecom").findOne({ "service-number": data });


    if (simtodelete) {
      await db.collection("telecom").deleteOne({ "service-number": data });
      await db.collection("telecomarchive").insertOne(simtodelete);
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
