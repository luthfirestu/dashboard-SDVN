export default function Form() {
    return (
        <div className="col-2 w-1/2">
            <div className="space-y-4">
                <p className="weight-bold">General</p>
                <div className="flex items-center gap-8"> {/* Flex container for Simulation Name */}
                    <span className="w-1/3">Simulation Name</span> {/* Text */}
                    <label className="input input-bordered flex items-center w-2/3"> {/* Input field */}
                        <input type="text" placeholder="Example: 10 Cars in Manhattan" className="grow" />
                    </label>
                </div>
                <div className="flex items-center gap-8"> {/* Flex container for Number of Cars */}
                    <span className="w-1/3">Number of Cars</span> {/* Text */}
                    <label className="input input-bordered flex items-center w-2/3"> {/* Input field */}
                        <input type="text" className="grow" placeholder="daisy@site.com" />
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
                <div className="flex items-center gap-8"> {/* Flex container for Routing Protocols */}
                    <span className="w-1/3">Routing Protocols</span> {/* Text */}
                    <select className="select select-bordered w-2/3 max-w-1/2">
                        <option disabled selected>Select Routing Protocols</option>
                        <option>Open Flow v1</option>
                        <option>Adhoc Mesh</option>
                    </select>
                </div>
                <div className="flex items-center gap-8"> {/* Flex container for Simulation Duration */}
                    <span className="w-1/3">Simulation Duration (ms)</span> {/* Text */}
                    <label className="input input-bordered flex items-center w-2/3"> {/* Input field */}
                        <input type="text" className="grow" placeholder="ex: 300" />
                    </label>
                </div>
                <div className="flex items-center gap-8"> {/* Flex container for Maximum Vehicle Speed */}
                    <span className="w-1/3">Maximum Vehicle Speed (km/h)</span> {/* Text */}
                    <label className="input input-bordered flex items-center w-2/3"> {/* Input field */}
                        <input type="text" className="grow" placeholder="ex: 80" />
                    </label>
                </div>
                <button className="btn btn-accent">Simulate</button>
            </div>
        </div>
    );
}
