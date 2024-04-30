"use server";
import connectDB from "@/app/lib/mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Simulation } from  "./models";
export const addSimulation = async (formData) => {
    const { simulationName, numberOfCars, topology, simulationDuration, maxVehicleSpeed,routingProtocols, powerThreshold} =
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
        powerThreshold,
      });
  
      await newSimulation.save();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create Simulation!");
    }
  
    revalidatePath("/simulation/history");
    redirect("/simulation/history");
  };

export const deleteSimulation = async (formData) => {
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