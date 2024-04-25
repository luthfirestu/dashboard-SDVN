import mongoose, { Schema, Document } from "mongoose";

export interface IForm extends Document {
  simulationName: string;
  numberOfCars: number;
  topology: string;
  simulationDuration: number;
  maxVehicleSpeed: number;
  routingProtocols: string;
  powerThreshold: number;
  // dateCreated: Date; // Include dateCreated field
}

const formSchema: Schema<IForm> = new Schema<IForm>({
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
  }


  // dateCreated: {
  //   type: Date,
  //   default: Date.now, // Set default value to current date
  //   select: false, // Exclude from query results
  // },
});

const Form =
  mongoose.models.Form || mongoose.model<IForm>("Form", formSchema);

export default Form;
