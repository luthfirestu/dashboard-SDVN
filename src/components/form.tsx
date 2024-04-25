import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        simulationName: '',
        numberOfCars: '',
        topology: '',
        simulationDuration: '',
        maxVehicleSpeed: '',
        routingProtocols: '',
        powerThreshold: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/input', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data);
            // Lakukan sesuatu setelah data berhasil disimpan ke dalam database
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // const [power, setPower] = useState(40); // Initial power value

    // const handlePowerChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const newValue = parseInt(event.target.value, 10); // Convert string value to integer
    //     if (!isNaN(newValue)) { // Check if the conversion was successful
    //         setPower(newValue); // Update the power value when the input changes
    //     }
    // };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                                    value={formData.simulationName}
                                    onChange={handleChange}
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
                                    value={formData.numberOfCars}
                                    onChange={handleChange}
                                    className="grow"
                                    placeholder="Example: 30"
                                    />
                                </label>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center gap-8"> {/* Flex container for Topology */}
                                <span className="w-full lg:w-1/3">Topology</span> {/* Text */}
                                <select
                                id="topology"
                                name="topology" 
                                value={formData.topology} 
                                onChange={handleChange} 
                                className="select select-bordered w-full lg:w-2/3 max-w-1/2">
                                    <option disabled value="">Select Topology</option>
                                    <option value="Bidirectional Highway 4 Plane">Bidirectional Highway 4 Plane</option>
                                    <option value="Bidirectional Highway 6 Plane">Bidirectional Highway 6 Plane</option>
                                </select>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center gap-8"> {/* Flex container for Simulation Duration */}
                                <span className="w-full lg:w-1/3">Simulation Duration</span> {/* Text */}
                                <label className="input input-bordered flex items-center w-full lg:w-2/3"> {/* Input field */}
                                    <input
                                    id="simulationDuration"
                                    type="number"
                                    name="simulationDuration"
                                    value={formData.simulationDuration}
                                    onChange={handleChange}
                                    className="grow"
                                    placeholder="Example: 300" 
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
                                    value={formData.maxVehicleSpeed}
                                    onChange={handleChange}
                                    className="grow"
                                    placeholder="Example: 80"
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
                                value={formData.routingProtocols}
                                onChange={handleChange}
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
                                    value={formData.powerThreshold}
                                    onChange={handleChange}
                                    placeholder="80"
                                    className="grow"
                                    min={0}
                                    max={70}
                                    />
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
