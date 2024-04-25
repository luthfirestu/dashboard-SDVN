import connectDB from "@/app/lib/mongodb";
import Form from "@/app/models/form";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req: any) {
  const { simulationName, numberOfCars, topology, simulationDuration, maxVehicleSpeed, routingProtocols, powerThreshold } = await req.json();

  try {
    await connectDB();
    
    // Create a new Date object for the current date and time
    const dateCreated = new Date();

    // Create the document including the dateCreated field
    await Form.create({
      simulationName,
      numberOfCars,
      topology,
      simulationDuration,
      maxVehicleSpeed,
      routingProtocols,
      powerThreshold,
      dateCreated // Include dateCreated field with the current date and time
    });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}
