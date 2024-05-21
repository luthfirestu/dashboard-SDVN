import { Simulation } from "./models";
import connectDB from "./mongodb";
import { GridFSBucket, ObjectId } from 'mongodb'
import mongoose from "mongoose";

// mengambil data simulation name dari database untuk ditampilkan ke historylist
export const fetchNames = async (q: any, page: any) => {
    console.log(q);
    const regex = new RegExp(q, "i");
  
    const ITEM_PER_PAGE = 5;
  
    try {
      connectDB();
      const count = await Simulation.countDocuments({ simulationName: { $regex: regex } });
      const names = await Simulation.find({ simulationName: { $regex: regex } })
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
      return { count, names };
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch names!");
    }
  };

//mengambil data simulasi untuk di tampilkan ke detail simulasi setelah di klik
export const fetchName = async (id: string) => {
    try {
        connectDB();
        const name = await Simulation.findById(id);
        return name;
    } catch (err) {
        console.log(err);
        throw new Error("Error fetching simulation names");
    }

}


// FETCHING EACH IMAGE
export const fetchImagePosition = async (id: any): Promise<Buffer> => {
  try {
    // Ensure the database is connected
    await connectDB();

    // Access the native MongoDB driver from the Mongoose connection
    const db = mongoose.connection.db;
    const bucket = new GridFSBucket(db, { bucketName: 'position' });

    // Open a download stream for the file with the specified id
    const fileStream = bucket.openDownloadStream(new ObjectId(id));

    // Return a promise that resolves with the file data
    return new Promise((resolve, reject) => {
      const chunks: Array<any> = [];
      fileStream.on('data', (chunk) => {
        chunks.push(chunk);
      });
      fileStream.on('error', (err: any) => {
        if (err.code === 'ENOENT') {
          reject(new Error('File not found'));
        } else {
          reject(err);
        }
      });
      fileStream.on('end', () => {
        resolve(Buffer.concat(chunks));
      });
    });
  } catch (err) {
    console.error('Error fetching image:', err);
    throw new Error("Error fetching bucket id");
  }
};

export const fetchImageSpeed = async (id: any): Promise<Buffer> => {
  try {
    // Ensure the database is connected
    await connectDB();

    // Access the native MongoDB driver from the Mongoose connection
    const db = mongoose.connection.db;
    const bucket = new GridFSBucket(db, { bucketName: 'speed' });

    // Open a download stream for the file with the specified id
    const fileStream = bucket.openDownloadStream(new ObjectId(id));

    // Return a promise that resolves with the file data
    return new Promise((resolve, reject) => {
      const chunks: Array<any> = [];
      fileStream.on('data', (chunk) => {
        chunks.push(chunk);
      });
      fileStream.on('error', (err:any) => {
        if (err.code === 'ENOENT') {
          reject(new Error('File not found'));
        } else {
          reject(err);
        }
      });
      fileStream.on('end', () => {
        resolve(Buffer.concat(chunks));
      });
    });
  } catch (err) {
    console.error('Error fetching image:', err);
    throw new Error("Error fetching bucket id");
  }
};

// export const fetchChunk = async (id: string) => {
//     try {
//         connectDB();
//         const data = await db.fs.chunks.findOne({ _id: new ObjectId(id) });
//         // const data = await db.fs.chunks.find(id);
//         return data;
//     } catch (err) {
//         console.log(err);
//         throw new Error("Error fetching simulation names");
//     }
// }

//mengambil data hasil simulasi 
//1 Vechicle Traffic
// export const fetchVechicleTraffic = async (id: string) => {
//     try {
//         connectDB();
//         const data = await VehicleTraffic.findById(id);
//         return data;
//     } catch (err) {
//         console.log(err);
//         throw new Error("Error fetching vehicle traffic data");
//     }
// }