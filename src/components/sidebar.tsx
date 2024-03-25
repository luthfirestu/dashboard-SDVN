import Link from "next/link";
export default function Sidebar() {
    return (
        <div>
            <ul className="menu bg-accent-200 w-56">
                <li><Link href="/simulation/history/[id]/vehicle-traffic">Vehicle Traffic</Link></li>
                <li><Link href="/simulation/history/[id]/network-traffic" className="active">Network Traffic</Link></li>
                <li><Link href="/simulation/history/[id]/forecasting">Forecasting</Link></li>
                <li><Link href="/simulation/history/[id]/power">Vehicle Traffic</Link></li>
            </ul>
        </div>
    );
}