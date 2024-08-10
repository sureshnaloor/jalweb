import clientPromise from "@/lib/mongoconnect";
import { NextResponse } from "next/server";

const client = await clientPromise;
const db = client.db("assetmanage");

export async function POST(request, response) {
    const data = await request.json();
    console.log(data);
    try {  
        const record = await db  
          .collection("sim")  
          .findOne({ "service-number": data });  
  
        if (record) {  
          console.log("record found");
          await db  
            .collection("simarchived")  
            .insertOne({
              "service-number": record["service-number"],
              "emp-number": record["emp-number"],
              "account-number":record["account-number"],
              "employee-name":record["employee-name"],
              coordinator:record["coordinator"],
              department:record["department"],
              location:record["location"],
              section:record["section"],
              "credit-limit":record["credit-limit"],
              plan:record["plan"],
              type:record["type"],
              purchasedate:record["purchasedate"],
              notes:record["notes"],
              editedAt: new Date(),
              updatedAt: new Date(),
              "archived-at": new Date(),
            });
            console.log("record inserted into archived"); 
          
  
      return NextResponse.json({
        status: "success",
        data: "simcard ARCHIVED successfully",
      });
        } 
        else {
          console.log("record not found");
          return NextResponse.json({
            status: "error",
            data: "simcard not found",
          });
        }
    } catch (error) {
      console.log("from inside catch of archive", error);
      return NextResponse.json({
        status: "error",
        data: error,
        message: "simcard not ARCHIVED",
      });
       
            }

        }
