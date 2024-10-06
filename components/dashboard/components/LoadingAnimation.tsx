import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchHeader from "./SearchHeader";
import gif from "@/public/paper-loader.gif";
const LoadingAnimation = () => {
  const steps = [
    "Searching 400+ flights",
    "Attaching company rules",
    "Serving best results",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) =>
        prevStep < steps.length - 1 ? prevStep + 1 : prevStep
      );
    }, 2000); // Move to the next step every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-start w-full h-[90vh]">
      <div className="w-full border-b border-gray-200 flex items-center justify-center">
        <SearchHeader />
      </div>

      {/* -----------HORIZONTAL LOADING LINE------------------- */}
      <div className="relative z-10 loader-line w-full h-[3px] mx-auto overflow-hidden rounded-full bg-white">
        <div className="absolute left-0 h-full w-[40%] bg-gradient-to-r from-[rgba(58,104,137,0.5)] via-[#3A6889] to-[rgba(58,104,137,0.5)] animate-smooth-line"></div>
      </div>

      <div className="w-full relative flex items-center justify-center h-full max-w-[80rem]">
        {/* ------------- Pulsating Background ------------- */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="flex flex-col gap-4 w-full">
            {Array.from([1, 2, 3]).map((loader) => (
              <div
                key={loader}
                className="flex flex-col gap-4 w-full rounded-lg  border border-gray-100 p-4"
              >
                {/* First row with icon and text placeholders */}
                <div className="flex gap-4 w-full">
                  {/* Icon Placeholder */}
                  <div className="animate-pulse bg-gray-100 h-[50px] w-[50px] rounded-lg"></div>

                  {/* Text Placeholder (simulating two lines) */}
                  <div className="flex flex-col gap-2 w-1/2">
                    <div className="animate-pulse bg-gray-100 h-[10px] w-[20%] rounded"></div>
                    <div className="flex gap-4">
                      <div className="animate-pulse bg-gray-100 h-[10px] w-[30%] rounded"></div>
                      <div className="animate-pulse bg-gray-100 h-[10px] w-[10%] rounded"></div>
                    </div>
                  </div>
                  {/* Text Placeholder (simulating two lines) */}
                  <div className="flex flex-col gap-2 w-1/2">
                    <div className="animate-pulse bg-gray-100 h-[10px] w-[20%] rounded"></div>
                    <div className="flex gap-4">
                      <div className="animate-pulse bg-gray-100 h-[10px] w-[30%] rounded"></div>
                      <div className="animate-pulse bg-gray-100 h-[10px] w-[10%] rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Second row with icon and text placeholders */}
                <div className="flex gap-4 w-full">
                  {/* Icon Placeholder */}
                  <div className="animate-pulse bg-gray-200 h-[50px] w-[50px] rounded-lg"></div>

                  {/* Text Placeholder (simulating two lines) */}
                  <div className="flex flex-col gap-2 w-1/2">
                    <div className="animate-pulse bg-gray-200 h-[10px] w-[20%] rounded"></div>
                    <div className="flex gap-4">
                      <div className="animate-pulse bg-gray-200 h-[10px] w-[30%] rounded"></div>
                      <div className="animate-pulse bg-gray-200 h-[10px] w-[10%] rounded"></div>
                    </div>
                  </div>
                  {/* Text Placeholder (simulating two lines) */}
                  <div className="flex flex-col gap-2 w-1/2">
                    <div className="animate-pulse bg-gray-200 h-[10px] w-[20%] rounded"></div>
                    <div className="flex gap-4">
                      <div className="animate-pulse bg-gray-200 h-[10px] w-[30%] rounded"></div>
                      <div className="animate-pulse bg-gray-200 h-[10px] w-[10%] rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* -----------------PLANE CARD------------------------- */}
        <div className="relative z-10 pb-4 rounded-lg bg-white shadow-md w-full max-w-sm flex items-center justify-center flex-col">
          {/*------------------- Paper plane icon ---------------*/}

          <Image src={gif} alt="loading" width={150} height={150} />

          {/*------------ Loading text ----------------*/}

          <div className="w-64 text-left mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center mb-2">
                <div
                  className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${
                    index < currentStep
                      ? "border-2 border-green-500"
                      : index > currentStep
                      ? "border-2 border-gray-50"
                      : ""
                  }`}
                >
                  {/* Simple spinner loader for the current step */}
                  {index === currentStep ? (
                    <div className="relative flex justify-center items-center">
                      <div className="w-3 h-3 border-2 border-t-transparent border-gray-800 rounded-full animate-spin"></div>
                    </div>
                  ) : index < currentStep ? (
                    // Show green checkmark if the step is completed
                    <svg
                      className="w-3 h-3 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : null}
                </div>
                <p
                  className={`text-sm ${
                    index <= currentStep ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
