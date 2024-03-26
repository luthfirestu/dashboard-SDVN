'use client'
import { useRouter } from "next/navigation"; // Import useRouter from Next.js

export default function Home() {
    const router = useRouter(); // Initialize useRouter
    return (
        <main>
            <h1 className="text-accent bold text-3xl absolute top-0 mt-8 ml-12">SDVN Testbed</h1>
            <div className="m-12">
                {/* Use onClick handler to navigate */}
                <button onClick={() => router.push("/simulation/new")} className="btn btn-accent relative top-0 mt-4">+ New Configuration</button>
                <div className="overflow-x-auto mt-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Date Created</th>
                            <th>Simulation Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody className="bg-accent bg-opacity-15">
                        {/* row 1 */}
                        <tr className="hover">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr className="hover">
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="join absolute bottom-0 right-0 m-12 ">
                        <button className="join-item btn">Previous</button>
                        <button className="join-item btn">1</button>
                        <button className="join-item btn btn-active">2</button>
                        <button className="join-item btn">3</button>
                        <button className="join-item btn">4</button>
                        <button className="join-item btn">Next</button>
                    </div>
            </div>
        </main>
    )}