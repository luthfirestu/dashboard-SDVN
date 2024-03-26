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
      <div className="m-12 w-1/2 space-y-4 absolute top-1/3">
        <h1 className="text-accent font-bold text-5xl">SDVN Testbed</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to jdicbebacibceuiebcibc</p>
        <button onClick={() => router.push("/simulation/history")} className="btn btn-accent mt-4 bg-opacity-75">Get Started</button>
      </div>
      <img src="self-driving-car.svg" alt="self-driving-car image" className="absolute bottom-0 right-0 mr-12 z-0 w-1/2 w-96" />
    </main>
  );
}
