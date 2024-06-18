import { fetchImagePosition, fetchImageRSSI, fetchImageSpeed, fetchName, fetchImagePower, fetchImageThroughput, fetchImageRtt } from "@/app/lib/data";
import Link from 'next/link';
import React from 'react';
import TabHistory from '@/components/tab';

type DetailPageParams = {
    params: {
      id: string;
    };
};

// This component can be a React Server Component
const DetailPage = async ({ params }: DetailPageParams) => {
    const { id } = params;
    const name = await fetchName(id);
    const pngPositionBuffer: Buffer = await fetchImagePosition(id);
    const pngSpeedBuffer: Buffer = await fetchImageSpeed(id);
    const pngRSSIBuffer: Buffer = await fetchImageRSSI(id);
    const pngPowerBuffer: Buffer = await fetchImagePower(id);
    const pngThroughputBuffer: Buffer = await fetchImageThroughput(id);
    const pngRttBuffer: Buffer = await fetchImageRtt(id);
    
    // Convert buffer to base64
    const imagePositionBase64 = pngPositionBuffer.toString('base64');
    const imageSpeedBase64 = pngSpeedBuffer.toString('base64');
    const imageRSSIBase64 = pngRSSIBuffer.toString('base64');
    const imagePowerBase64 = pngPowerBuffer.toString('base64');
    const imageThroughputBase64 = pngThroughputBuffer.toString('base64');
    const imageRttBase64 = pngRttBuffer.toString('base64');

    const tab1Content = (
        <div>
            <h1>Simulation Result Throughput per Cars</h1>
            <img className="w-1/2" src={`data:image/png;base64,${imageThroughputBase64}`} alt="Simulation Result Throughput" />
        </div>
    );

    const tab2Content = (
        <div>
            <h1>Simulation Result Round Trip Time from Ping</h1>
            <img className="w-1/2" src={`data:image/png;base64,${imageRttBase64}`} alt="Simulation Result RTT" />
        </div>
    );

    const tab3Content = (
        <div>
            <h1>Simulation Result Transmit Power</h1>
            <img src={`data:image/png;base64,${imagePowerBase64}`} alt="Simulation Result Transmit Power" />
            <h1 className="mr-2 relative">Simulation Result RSSI</h1>
            <img className="w-1/2" src={`data:image/png;base64,${imageRSSIBase64}`} alt="Simulation Result RSSI" />
        </div>
    );

    const tab4Content = (
        <div>
            <h1>Simulation Result Vehicle Position</h1>
            <img className="w-1/2" src={`data:image/png;base64,${imagePositionBase64}`} alt="Simulation Result Position" />
            <h1 className="mr-2 relative">Simulation Result Vehicle Speed</h1>
            <img className="w-1/2" src={`data:image/png;base64,${imageSpeedBase64}`} alt="Simulation Result Speed" />
        </div>
    );

    return (
        <main className="m-12">
            <Link href="/simulation/history">
                <button className="btn btn-xs text-accent">&lt; Back </button>
            </Link>
            <h1 className="text-3xl mt-4">Overview</h1>
            <table className="table mt-4 w-1/2 table-sm">
                <thead className="bg-accent bg-opacity-15">
                    <tr>
                        <th>Attribute</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Simulation Name</td>
                        <td>{name.simulationName}</td>
                    </tr>
                    <tr>
                        <td>Number of Cars</td>
                        <td>{name.numberOfCars}</td>
                    </tr>
                    <tr>
                        <td>Topology</td>
                        <td>{name.topology}</td>
                    </tr>
                    <tr>
                        <td>Simulation Duration</td>
                        <td>{name.simulationDuration}</td>
                    </tr>
                    <tr>
                        <td>Maximum Vehicle Speed</td>
                        <td>{name.maxVehicleSpeed}</td>
                    </tr>
                    <tr>
                        <td>Routing Protocols</td>
                        <td>{name.routingProtocols}</td>
                    </tr>
                    <tr>
                        <td>Minimum Power</td>
                        <td>{name.minPower}</td>
                    </tr>
                    <tr>
                        <td>Maximum Power</td>
                        <td>{name.maxPower}</td>
                    </tr>
                    <tr>
                        <td>Date Created</td>
                        <td>{name.createdAt?.toString().slice(4, 16)}</td>
                    </tr>
                </tbody>
            </table>
            <h1 className="text-3xl mt-8">Simulation Result</h1>
            <TabHistory 
                tab1Content={tab1Content} 
                tab2Content={tab2Content} 
                tab3Content={tab3Content}
                tab4Content={tab4Content}
            />
        </main>
    );
};

export default DetailPage;
