import { useState } from 'react';

export default function Form() {
    const [power, setPower] = useState(40); // Initial power value

    const handlePowerChange = (event) => {
        setPower(event.target.value); // Update the power value when the input changes
    };

    return (
        <div>
            <div className="space-y-4">
                <div className="flex gap-12">  {/* Gap between row */}
                    <div className="space-y-3 flex-1">
                        <p className="font-bold">General</p>
                        <div className="flex items-center gap-8"> {/* Flex container for Simulation Name */}
                            <span className="w-1/3">Simulation Name</span> {/* Text */}
                            <label className="input input-bordered flex items-center w-2/3"> {/* Input field */}
                                <input type="text" placeholder="Example: 10 Cars in Manhattan" className="grow" />
                            </label>
                        </div>
                        <div className="flex items-center gap-8"> {/* Flex container for Number of Cars */}
                            <span className="w-1/3">Number of Cars</span> {/* Text */}
                            <label className="input input-bordered flex items-center w-2/3 max-w-1/2"> {/* Input field */}
                                <input type="text" className="grow" placeholder="Example: 30" />
                            </label>
                        </div>
                        <div className="flex items-center gap-8"> {/* Flex container for Topology */}
                            <span className="w-1/3">Topology</span> {/* Text */}
                            <select className="select select-bordered w-2/3 max-w-1/2">
                                <option disabled selected>Select Topology</option>
                                <option>Bidirectional Highway 4 Plane</option>
                                <option>Bidirectional Highway 6 Plane</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-8"> {/* Flex container for Simulation Duration */}
                            <span className="w-1/3">Simulation Duration (ms)</span> {/* Text */}
                            <label className="input input-bordered flex items-center w-2/3"> {/* Input field */}
                                <input type="text" className="grow" placeholder="Example: 300" />
                            </label>
                        </div>
                        <div className="flex items-center gap-8"> {/* Flex container for Maximum Vehicle Speed */}
                            <span className="w-1/3">Maximum Vehicle Speed (km/h)</span> {/* Text */}
                            <label className="input input-bordered flex items-center w-2/3"> {/* Input field */}
                                <input type="text" className="grow" placeholder="Example: 80" />
                            </label>
                        </div>
                    </div>
                    <div className="space-y-3 flex-1">
                        <p className="font-bold">Routing</p>
                        <div className="flex items-center gap-8"> {/* Flex container for Routing Protocols */}
                            <span className="w-1/3">Routing Protocols</span> {/* Text */}
                            <select className="select select-bordered w-2/3">
                                <option disabled selected>Select Routing Protocols</option>
                                <option>Open Flow v1</option>
                                <option>Adhoc Mesh</option>
                            </select>
                        </div>
                        <p className='font-bold'>Power Adjustment</p>
                        <div className="flex items-center gap-8"> {/* Flex container for Power Adjustment */}
                            <span className="w-1/3">Threshold</span> {/* Text */}
                            <input 
                                type="range" 
                                min={0} 
                                max={100} 
                                value={power} 
                                className="range"
                                onChange={handlePowerChange} // Handle range input change
                            />
                            <span>{power} watt</span> {/* Display current power value */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 m-24">
                <button className="btn btn-accent block">Simulate</button>
            </div>
        </div>
    );
}
