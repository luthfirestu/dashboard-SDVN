'use client'
import { useRouter } from "next/navigation";
import NewSimulation from "@/components/newSimulation";

const NewSimulationPage = () => {
    const router = useRouter(); // Initialize useRouter

    const goBack = () => {
        router.back(); // Go back to the previous page
    };

    return (
        <main>
            <h1 className="text-accent bold text-3xl absolute top-0 mt-8 ml-12">SDVN Testbed</h1>
            <div className="m-12">
                <div className="flex gap-2">
                    {/* Back button */}
                    <button onClick={goBack} className="btn btn-xs text-accent">&lt;</button>
                    <p className="text-accent text-lg">New Configuration</p>
                </div>
                <div className="m-4">
                    <NewSimulation />
                </div>
            </div>
        </main>
    );
}

export default NewSimulationPage;