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
      "service-number": data.service_number,
      "account-number": data.account_number,
      "employee-name": data.employee_name,
      coordinator: data.coordinator,
      department: data.department,
      location: data.location,
      section: data.section,
      projectsite: data.projectsite,
      mincontract: data.mincontract,
      plan: data.plan,
      type: data.type,
      purchasedate: data.purchasedate,
      notes: data.notes,
      simnumber: data.simnumber,
      createdAt: new Date(),
      updatedAt: new Date(),
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
    const updatedata = {
      "account-number": data.account_number,
      "employee-name": data.employee_name,
      coordinator: data.coordinator,
      department: data.department,
      location: data.location,
      section: data.section,
      plan: data.plan,
      type: data.type,
      purchasedate: data.purchasedate,
      notes: data.notes,
      simnumber: data.simnumber,
      projectsite: data.projectsite,
      mincontract: data.mincontract,
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
      oldsimnumber: data.oldsimnumber,
      oldprojectsite: data.oldprojectsite,
      oldmincontract: data.oldmincontract,      
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
    const routertodelete = await db
      .collection("telecom")
      .findOne({ "service-number": data });

    if (routertodelete) {
      await db.collection("telecom").deleteOne({ "service-number": data });
      await db.collection("telecomarchive").insertOne(routertodelete);
      revalidatePath("/telecom/router/view");
      return NextResponse.json({
        status: "success",
        data: "router deleted successfully",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: "error",
      data: error,
    });
  }
}
