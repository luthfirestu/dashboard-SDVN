'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true); // Set loaded to true when component mounts
    return () => {
      setLoaded(false); // Set loaded to false when component unmounts
    };
  }, []);
  const router = useRouter();
  return (
    <main className="ml-8 mt-80">
      <img 
        className={`absolute top-0 right-0 mr-0 z-0 w-1/2 ${loaded ? 'fade-in' : 'fade-out'}`} 
        src="vector.svg" 
        alt="vector image" 
      />
      <div className="m-12 w-1/2 space-y-4">
        <h1 className="text-accent bold text-5xl">SDVN Testbed</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to jdicbebacibceuiebcibc</p>
        <button onClick={() => router.push("/simulation/history")} className="btn btn-accent mt-4 bg-opacity-75">Get Started</button>
      </div>
    </main>
  );
}
