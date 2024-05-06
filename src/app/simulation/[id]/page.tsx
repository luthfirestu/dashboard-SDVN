import { fetchName } from "@/app/lib/data";
import Link from 'next/link';

const DetailPage = async ({ params }) => {
    const { id } = params;
    const name = await fetchName(id);

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
                        <td>Power Threshold</td>
                        <td>{name.powerThreshold}</td>
                    </tr>
                    <tr>
                        <td>Date Created</td>
                        <td>{name.createdAt?.toString().slice(4, 16)}</td>
                    </tr>
                </tbody>
            </table>
            <h1 className="text-3xl mt-8">Simulation Result</h1>
            <div role="tablist" className="tabs tabs-accent tabs-boxed mt-4 w-auto">
                <a role="tab" className="tab">Vehicle Traffic</a>
                <a role="tab" className="tab tab-active">Network Traffic</a>
                <a role="tab" className="tab">Forecasting</a>
                <a role="tab" className="tab">Power Consumption</a>
            </div>
        </main>
    );
}

export default DetailPage;
