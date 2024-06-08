import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addSimulation } from '@/app/lib/actions';

const NewSimulation = () => {
    return (
        <div>
            <form action={addSimulation}>
                <div className="space-y-4">
                    <div className="flex flex-col lg:flex-row gap-12"> {/* Gap between row */}
                        <div className="space-y-3 flex-1">
                            <p className="font-bold">General</p>
                            <div className="flex flex-col lg:flex-row items-center gap-8"> {/* Flex container for Simulation Name */}
                                <span className="w-full lg:w-1/3">Simulation Name</span> {/* Text */}
                                <label className="input input-bordered flex items-center w-full lg:w-2/3"> {/* Input field */}
                                    <input
                                    id="simulationName"
                                    type="text"
                                    name="simulationName"
                                    placeholder="Example: 10 Cars in Manhattan"
                                    className="grow"
                                    />
                                </label>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center gap-8"> {/* Flex container for Number of Cars */}
                                <span className="w-full lg:w-1/3">Number of Cars</span> {/* Text */}
                                <label className="input input-bordered flex items-center w-full lg:w-2/3 max-w-1/2"> {/* Input field */}
                                    <input
                                    id="numberOfCars"
                                    type="number"
                                    name="numberOfCars"
                                    className="grow"
                                    placeholder="maximum 20 cars"
                                    />
                                </label>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center gap-8"> {/* Flex container for Topology */}
                                <span className="w-full lg:w-1/3">Topology</span> {/* Text */}
                                <select
                                id="topology"
                                name="topology"
                                className="select select-bordered w-full lg:w-2/3 max-w-1/2">
                                    <option disabled value="">Select Topology</option>
                                    <option value="Bidirectional Highway 4 Plane">Bidirectional Highway 4 Plane</option>
                                    <option value="Bidirectional Highway 6 Plane">Bidirectional Highway 6 Plane</option>
                                    <option value="Manhattan">Manhattan</option>
                                </select>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center gap-8"> {/* Flex container for Simulation Duration */}
                                <span className="w-full lg:w-1/3">Simulation Duration</span> {/* Text */}
                                <label className="input input-bordered flex items-center w-full lg:w-2/3"> {/* Input field */}
                                    <input
                                    id="simulationDuration"
                                    type="number"
                                    name="simulationDuration"
                                    className="grow"
                                    placeholder="min 300 ms" 
                                    min={300}/>
                                    ms
                                </label>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center gap-8"> {/* Flex container for Maximum Vehicle Speed */}
                                <span className="w-full lg:w-1/3">Maximum Vehicle Speed</span> {/* Text */}
                                <label className="input input-bordered flex items-center w-full lg:w-2/3"> {/* Input field */}
                                    <input
                                    id="maxVehicleSpeed"
                                    type="number"
                                    name="maxVehicleSpeed"
                                    className="grow"
                                    placeholder="minimum 60 maximum 80"
                                    min={60}
                                    max={80} />
                                    km/h
                                </label>
                            </div>
                        </div>
                        <div className="space-y-3 flex-1">
                            <p className="font-bold">Routing</p>
                            <div className="flex flex-col lg:flex-row items-center gap-8"> {/* Flex container for Routing Protocols */}
                                <span className="w-full lg:w-1/3">Routing Protocols</span> {/* Text */}
                                <select
                                id="routingProtocols"
                                name="routingProtocols"
                                className="select select-bordered w-full lg:w-2/3">
                                    <option disabled value="">Select Routing Protocols</option>
                                    <option value="Open Flow v1">Open Flow v1</option>
                                    <option value="Adhoc Mesh">Adhoc Mesh</option>
                                </select>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center gap-8"> {/* Flex container for Simulation Name */}
                                <span className="w-full lg:w-1/3">Power Threshold</span> {/* Text */}
                                <label className="input input-bordered flex items-center w-full lg:w-2/3"> {/* Input field */}
                                    <input
                                    id="powerThreshold"
                                    type="number"
                                    name="powerThreshold"
                                    placeholder="minimum 0 maximum 35"
                                    className="grow"
                                    min={0}
                                    max={35}
                                /> dB
                                </label>
                            </div>


                        {/* power adjustment slider fix next*/}
                            {/* <p className='font-bold'>Power Adjustment</p> */}
                                {/* <div className="flex flex-col lg:flex-row items-center gap-8"> Flex container for Power Adjustment */}
                                    {/* <span className="w-full lg:w-1/3">Threshold</span> Text */}
                                    {/* <input */}
                                        {/* type="range"  */}
                                        {/* min={0} 
                                        max={100} 
                                        value={power} 
                                        className="range"
                                        onChange={handlePowerChange} // Handle range input change
                                    /> */}
                                    {/* <span>{power} watt</span> {/* Display current power value */}
                                {/* </div> */}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 m-24">
                    <button type="submit" className="btn btn-accent block">Simulate</button>
                </div>
            </form>
            {/* <div className="bg-slate-100 flex flex-col">
                {Error &&
                Error.map((e) => (
                    <div
                    className={`${
                        success ? "text-green-800" : "text-red-600"
                    } px-5 py-2`}
                    >
                    {e}
                </div>
            ))}
        </div> */}
    </div>
    );
}
export default NewSimulation;