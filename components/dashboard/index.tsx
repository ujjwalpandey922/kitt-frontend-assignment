"use client";
import { useState } from "react";
import LoadingAnimation from "./components/LoadingAnimation";
import FlightSearchBox from "./components/FlightSearchBox";
import { useRouter } from "next/navigation";

const FlightSearch = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    // Set loading state to true when search starts
    setLoading(true);

    // Simulate a delay for searching (e.g., API call)
    setTimeout(() => {
      // Stop loading after search is "completed"
      setLoading(false);
      // Do something after search completes
      router.push("/results");
    }, 6000);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-6">
      {!loading ? (
        <FlightSearchBox handleSearch={handleSearch} />
      ) : (
        <LoadingAnimation />
      )}
    </div>
  );
};

export default FlightSearch;
