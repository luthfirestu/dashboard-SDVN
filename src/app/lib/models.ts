import mongoose from "mongoose";

const simulationSchema = new mongoose.Schema(
  {
    simulationName: {
      type: String,
      required: [true, "Simulation Name is required."],
      trim: true,
      minLength: [2, "Name must be larger than 2 characters"],
      maxLength: [50, "Name must be lesser than 50 characters"],
    },

    numberOfCars: {
      type: Number,
      required: [true, "Number of Cars is required."],
    },

    topology: {
      type: String,
      required: [true, "Topology is required."],
    },

    simulationDuration: {
      type: Number,
      required: [true, "Simulation Duration is required."],
    },

    maxVehicleSpeed: {
      type: Number,
      required: [true, "Maximum Vehicle Speed is required."],
    },

    routingProtocols: {
      type: String,
      required: [true, "Routing Protocols is required."],
    },
    powerThreshold: {
      type: Number,
      required: [true, "Power Threshold is required."],
    },
  },
  { timestamps: true }
);

export const Simulation = mongoose.models.Simulation || mongoose.model("Simulation", simulationSchema);

// const vehicleTrafficSchema = new mongoose.Schema(
//   {
//     simulationName: {
//       type: String,
//       required: [true, "Simulation Name is required."],
//       trim: true,
//       minLength: [2, "Name must be larger than 2 characters"],
//       maxLength: [50, "Name must be lesser than 50 characters"],
//     },
//     carsCommunication: {
//       type: Number,
//       required: [true, "Cars Communication is required."],
//     }
//   }, { timestamps: true }
// );

// export const VehicleTraffic = mongoose.models.VehicleTraffic || mongoose.model("VehicleTraffic", vehicleTrafficSchema)