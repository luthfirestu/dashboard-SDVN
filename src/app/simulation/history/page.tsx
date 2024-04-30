// Ganti dengan path yang sesuai
import Search from "@/components/search";
import Pagination from "@/components/pagination";
import { fetchNames } from '@/app/lib/data';
import { deleteSimulation } from "@/app/lib/actions";
import Link from 'next/link';

const HistoryPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, names } = await fetchNames(q, page);
  return (
    <main>
      <h1 className="text-accent bold text-3xl absolute top-0 mt-8 ml-12">SDVN Testbed</h1>
      <div className="m-12">
        <Search placeholder="Search for a simulation..." />
        <Link href="/simulation/new">
          <button className="btn btn-accent relative mt-8 btn-md">+ New Configuration</button>
        </Link>
        <div className="overflow-x-auto mt-4">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Date Created</th>
                <th>Simulation Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bg-accent bg-opacity-15">
              {names.map((name) => (
                <tr key={name._id}>
                  <td>{name.createdAt?.toString().slice(4, 16)}</td>
                  <td>{name.simulationName}</td>
                  <td className="flex gap-2">
                      <Link href={`/simulation/${name.id}`}>
                        <button className="btn btn-accent btn-xs">
                          View
                        </button>
                      </Link>
                      <form action={deleteSimulation}>
                        <input type="hidden" name="id" value={name.id} />
                        <button className="btn btn-error btn-xs">
                          Delete
                        </button>
                      </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination count={count} />
        </div>
      </div>
    </main>
  );
}
 export default HistoryPage;