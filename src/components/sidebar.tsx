import Link from "next/link";
export default function Sidebar() {
    return (
        <div>
            <ul className="menu bg-accent-200 w-56">
                <li><Link href="/simulation/history/vehicle-traffic/[id]">Vehicle Traffic</Link></li>
                <li><Link href="/simulation/history/network-traffic/[id]" className="active">Network Traffic</Link></li>
                <li><Link href="/simulation/history/[id]/forecasting[id]">Forecasting</Link></li>
                <li><Link href="/simulation/history/[id]/power[id]">Vehicle Traffic</Link></li>
            </ul>
        </div>
    );
}