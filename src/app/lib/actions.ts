"use server";
import connectDB from "@/app/lib/mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Simulation } from  "./models";
export const addSimulation = async (formData: any) => {
    const { simulationName, numberOfCars, topology, simulationDuration, maxVehicleSpeed,routingProtocols, minPower, maxPower} =
      Object.fromEntries(formData);
  
    try {
      connectDB();
  
      const newSimulation = new Simulation({
        simulationName, 
        numberOfCars, 
        topology, 
        simulationDuration,
        maxVehicleSpeed,
        routingProtocols,
        minPower,
        maxPower
      });
  
      await newSimulation.save();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create Simulation!");
    }
  
    revalidatePath("/simulation/history");
    redirect("/simulation/history");
  };

export const deleteSimulation = async (formData:any) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDB();
    await Simulation.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/simulation/history");
};