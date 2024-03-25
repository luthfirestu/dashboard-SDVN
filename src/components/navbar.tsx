import Link from "next/link";
export default function Navbar() {
    return (
    <div className="navbar bg-base-100">
        <div className="flex-none object-right z-10">
            <ul className="text-md gap-8 mt-6 mr-6 absolute top-0 right-0 mr-2 menu menu-horizontal px-1 md:gap-2">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/simulation/history">Simulation</Link></li>
                <li><Link href="/examples">Examples</Link></li>
                <li><Link href="/help">Help</Link></li>
                <li>
                    <details>
                    <summary>
                        Parent
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                    </ul>
                    </details>
                </li>
            </ul>
        </div>
    </div>
);
}