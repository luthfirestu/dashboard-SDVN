"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Simulation, { ISimulation } from '@/app/models/table';

export default function Home() {
  const [simulations, setSimulations] = useState<ISimulation[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchSimulations() {
      try {
        const simulationsFromDB = await Simulation.find().exec();
        setSimulations(simulationsFromDB);
      } catch (error) {
        console.error('Error fetching simulations:', error);
      }
    }

    fetchSimulations();
  }, []);

  const handleEditSimulation = (id: string) => {
    router.push(`/simulation/edit/${id}`);
  };

  const handleDeleteSimulation = async (id: string) => {
    try {
      await Simulation.findByIdAndDelete(id).exec();
      setSimulations(prevSimulations => prevSimulations.filter(simulation => simulation._id !== id));
    } catch (error) {
      console.error('Error deleting simulation:', error);
    }
  };

  return (
    <main>
      <h1 className="text-accent bold text-3xl absolute top-0 mt-8 ml-12">SDVN Testbed</h1>
      <div className="m-12">
        <button onClick={() => router.push("/simulation/new")} className="btn btn-accent relative top-0 mt-4">+ New Configuration</button>
        <div className="overflow-x-auto mt-4">
          <table className="table">
            <thead>
              <tr>
                <th>Date Created</th>
                <th>Simulation Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bg-accent bg-opacity-15">
              {simulations.map((simulation, index) => (
                <tr key={index}>
                  <td>{simulation.dateCreated.toLocaleString()}</td>
                  <td>{simulation.simulationName}</td>
                  <td>{simulation.description}</td>
                  <td>
                    <button onClick={() => handleEditSimulation(simulation._id)}>Edit</button>
                    <button onClick={() => handleDeleteSimulation(simulation._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
