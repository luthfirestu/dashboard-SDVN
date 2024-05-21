import Sidebar from "@/components/sidebar";
import { fetchImage } from "../lib/fetchImage/fetch";

const TestPage = async ({ params }) => {
    useEffect (() => {
        if (id) {
            const png = await fetchImage(id)
            
        }
    })
    
    return (
        <main>
            {png.data}
        </main>
    );
}