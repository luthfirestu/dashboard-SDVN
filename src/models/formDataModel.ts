import mongoose, { Schema, Document } from 'mongoose';

// Definisikan antarmuka (interface) untuk data FormData
interface IFormData extends Document {
  simulationName: string;
  numberOfCars: number;
  topology: string;
  simulationDuration: number;
  maxVehicleSpeed: number;
  routingProtocols: string[];
  powerThreshold: number;
}

// Definisikan skema (schema) untuk data FormData
const formDataSchema: Schema = new Schema({
  simulationName: { type: String, required: true },
  numberOfCars: { type: Number, required: true },
  topology: { type: String, required: true },
  simulationDuration: { type: Number, required: true },
  maxVehicleSpeed: { type: Number, required: true },
  routingProtocols: { type: [String], required: true },
  powerThreshold: { type: Number, required: true }
});

// Buat model data FormData menggunakan skema yang telah didefinisikan
const FormDataModel = mongoose.model<IFormData>('FormData', formDataSchema);

export default FormDataModel;
