'use client'
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const sumoSectionRef = useRef<HTMLDivElement>(null);
  const carImageRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoaded(true); // Set loaded to true when component mounts

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      setLoaded(false); // Set loaded to false when component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (carImageRef.current && sumoSectionRef.current) {
      const sumoSectionTop = sumoSectionRef.current.offsetTop;
      const windowHeight = window.innerHeight;

      let transformValue = 0;
      if (scrollY < sumoSectionTop - windowHeight) {
        transformValue = 0;
      } else if (scrollY >= sumoSectionTop - windowHeight && scrollY <= sumoSectionTop) {
        transformValue = ((scrollY - (sumoSectionTop - windowHeight)) / windowHeight) * -500;
      } else {
        transformValue = -100;
      }

      carImageRef.current.style.transform = `translateX(${transformValue}%)`;
    }
  }, [scrollY]);

  const handleScrollToSection = () => {
    if (sumoSectionRef.current) {
      sumoSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="mx-8 mt-80">
      <img 
        className={`absolute top-0 right-0 mr-0 z-0 w-1/2 ${loaded ? 'fade-in' : 'fade-out'}`} 
        src="vector.svg"
        alt="vector image"
      />
      <div className="m-12 w-1/2 space-y-4 absolute top-1/3">
        <h1 className="text-accent font-bold text-5xl">SDVN Testbed</h1>
        <p>Join us on the journey towards a safer, smarter, and more efficient transportation ecosystem. Experience the power of SDVN Testbed today. Start Exploring Now!</p>
        <button onClick={handleScrollToSection} className="btn btn-accent mt-4 bg-opacity-75">Learn more</button>
      </div>
      <div ref={sumoSectionRef} className="m-12 space-y-4 relative top-[480px] pb-12">
        <h1 className="text-accent font-bold text-5xl">Powered by Mininet WiFi and SUMO</h1>
        <p>Our SDVN Testbed leverages the power of Mininet WiFi and SUMO (Simulation of Urban MObility) to create a realistic and dynamic simulation environment for vehicular networks:</p>
        <div className="join join-horizontal gap-24">
          <div className="card bg-base-100 shadow-xl p-6">
            <h2 className="text-accent font-bold text-lg">Mininet-Wifi</h2>
            <p>Provides a flexible and powerful platform for creating and managing complex wireless network topologies, allowing for detailed experimentation and testing of network configurations and protocols.</p>
            <div className="flex justify-center py-8">
              <img 
              src="mininet.png"
              className="w-1/2"/>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl p-6">
            <h2 className="text-accent font-bold text-lg">SUMO</h2>
            <p>Offers high-fidelity traffic simulation capabilities, enabling accurate modeling of vehicle movements and interactions within urban environments. This integration allows for comprehensive testing of V2V and V2I communication scenarios.</p>
            <div className="flex justify-center py-8">
              <img 
              src="sumo.png"
              className="w-1/2"/>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Link href="/simulation/history">
            <button onClick={handleScrollToSection} className="btn btn-accent mt-4 bg-opacity-75">Get Started</button>
          </Link>
        </div>
      </div>
      <img 
        ref={carImageRef}
        src="self-driving-car.svg" 
        alt="self-driving-car image" 
        className="absolute bottom-0 right-0 mr-12 z-0 w-1/3 transition-transform duration-500 ease-in-out transform translate-x-0"
      />
    </main>
  );
}
