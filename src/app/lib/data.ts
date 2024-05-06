import { Simulation } from "./models";
import connectDB from "./mongodb";

// mengambil data simulation name dari database untuk ditampilkan ke historylist
export const fetchNames = async (q: any, page: any) => {
    console.log(q);
    const regex = new RegExp(q, "i");
  
    const ITEM_PER_PAGE = 5;
  
    try {
      connectDB();
      const count = await Simulation.find({ simulationName: { $regex: regex } }).count();
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