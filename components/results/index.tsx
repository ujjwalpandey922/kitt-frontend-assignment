"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegCircle, FaRegClock } from "react-icons/fa";
import SearchHeader from "../dashboard/components/SearchHeader";

const ResultsPage = () => {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide header when scrolled down, show it when at the top
      if (window.scrollY > 0) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className=" w-full px-4 space-y-4">
      {/* Conditionally render the SearchHeader based on scroll position */}
      {showHeader && (
        <div className="w-full border-b py-4 border-gray-200 flex items-center justify-center">
          <SearchHeader type="result" />
        </div>
      )}
      <div className="container mx-auto">
        {/* Show total number of results */}
        <p className="text-sm text-[#787B80] mb-4">
          Showing 356 of 767 results
        </p>

        {/* Display flight results */}
        <div className="space-y-4 ">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <FlightCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
const FlightCard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="w-full">
      <div
        className="border rounded-lg  flex justify-between  shadow-sm hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsSidebarOpen(true)}
      >
        {/* Left section: Flight details */}
        <div className="w-full space-y-4 flex-[.8] p-4">
          <div className="flex w-full justify-between">
            {/* left side image info  */}
            <div className="space-y-1 flex-[.7]">
              {/* DATE  */}
              <div className="text-[#787B80] font-medium text-sm">
                Thu 25 Jun
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/emirates.svg"
                  alt="Emirates"
                  className="h-12 w-12"
                  width={20}
                  height={20}
                />
                <div className="flex flex-col font-medium">
                  <span className="text-sm font-normal text-[#787B80]">
                    Emirates • AT 4334
                  </span>
                  <p className="text-lg font-medium">9:45 AM - 11:45 AM</p>
                </div>
              </div>
            </div>
            {/* right side image info  */}
            <div className="text-sm text-[#787B80] w-full justify-between flex gap-4 flex-[.3]">
              <div className="flex flex-col gap-1 justify-end">
                <span className="text-[#787B80] text-sm"> CDG - DXB</span>
                <span className="text-[#001F1D] text-lg"> 7h 10min</span>
              </div>
              <div className="flex flex-col gap-1 justify-end mx-auto">
                <span className="text-[#001F1D] text-lg"> Non Stop</span>
              </div>
            </div>
          </div>

          <div className=" flex w-full justify-between">
            {/* left side image info  */}
            <div className="space-y-1 flex-[.7]">
              {/* DATE  */}
              <div className="text-[#787B80] font-medium text-sm">
                Sat 2 Jul
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src="/emirates.svg"
                  alt="Emirates"
                  className="h-12 w-12"
                  width={20}
                  height={20}
                />
                <div className="flex flex-col ">
                  <span className="text-sm font-normal text-[#787B80]">
                    Emirates • AT 4334
                  </span>
                  <p className="text-lg font-medium">
                    9:45 AM - 11:45 AM
                    <sup className="text-[#962828F9]"> +1 day</sup>
                  </p>
                </div>
              </div>
            </div>

            {/* right side image info  */}
            <div className="text-sm text-[#787B80] w-full justify-between flex gap-4 flex-[.3]">
              <div className="flex flex-col gap-1 justify-end">
                <span className="text-[#787B80] text-sm"> CDG - DXB</span>
                <span className="text-[#001F1D] text-lg"> 7h 10min</span>
              </div>
              <div className="flex flex-col gap-1 justify-end mx-auto">
                <span className="text-[#787B80] text-sm">Lisbon</span>
                <span className="text-[#001F1D] text-lg"> 1 stop</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[.2] border-l border-gray-200 self-stretch flex items-end ">
          {/* Right section: Price and Select button */}
          <div className="text-left p-4 w-full">
            <div className="text-sm text-[#787B80]">from</div>
            <div className="text-2xl font-medium">AED 1,456.90</div>
            <Button className="mt-4 bg-[#003E39] text-white w-full">
              Select
            </Button>
          </div>
        </div>
      </div>
      {/* ----------- DRAWER FOR FLIGHT INFO ------------- */}
      <Drawer
        direction="right"
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      >
        <DrawerContent className="right-4 top-0 bottom-0 fixed z-50 flex outline-none w-1/2 ">
          <div className="rounded-[16px] w-full h-full border border-[#E6E8EB] mt-4 mr-4 mb-4 p-4 flex flex-col bg-white">
            <DrawerHeader className=" relative px-0 border-b border-[#E6E8EB]">
              <span
                onClick={() => setIsSidebarOpen(false)}
                className="top-0 left-0 absolute cursor-pointer hover:bg-slate-400 w-max p-1 rounded-full bg-[#F5F7FA] text-[#484A4D]"
              >
                <IoMdArrowRoundBack />
              </span>
              <DrawerTitle className="font-medium pt-8 text-xl ">
                Flight details
              </DrawerTitle>
            </DrawerHeader>

            {/* Flight Timeline Section */}
            <div className="mt-4  w-full flex justify-between">
              <div className="space-y-6">
                {/* Flight Leg 1 */}
                <div className="flex gap-4 relative">
                  <FaRegCircle />
                  <span className="absolute h-full w-[1px] bg-black left-2 top-5"></span>
                  <div className="w-full">
                    <div className="text-sm text-gray-500">
                      Sat 28 Sept • 2:15
                    </div>
                    <div className="font-medium">
                      DXB • Dubai International Airport
                    </div>
                  </div>
                </div>
                {/* Flight Leg 2 */}
                <div className="flex relative gap-4 bg-white">
                  <FaRegCircle />
                  <div className="w-full">
                    <div className="text-sm text-gray-500">
                      Sat 28 Sept • 2:15
                    </div>
                    <div className="font-medium">
                      DXB • Dubai International Airport
                    </div>
                  </div>
                </div>

                {/* Layover */}
                <div className="text-center relative  flex gap-2 items-center justify-center py-12 w-full text-gray-500 text-sm">
                  <span className="absolute h-[150%] w-[1px] border border-dotted border-black left-2 -top-10"></span>
                  <FaRegClock />
                  <div className="text-xs">Layover 2h 25m</div>
                </div>

                {/* Flight Leg 3 */}
                <div className="flex gap-4 relative">
                  <span className="absolute h-full w-[1px] bg-black left-2 top-5"></span>
                  <FaRegCircle />
                  <div className="w-full">
                    <div className="text-sm text-gray-500">
                      Sat 28 Sept • 2:15
                    </div>
                    <div className="font-medium">
                      RUH • King Khalid International Airport
                    </div>
                  </div>
                </div>

                {/* Final Leg */}
                <div className="flex gap-4">
                  <FaRegCircle />
                  <div className="w-full">
                    <div className="text-sm text-gray-500">
                      Sat 28 Sept • 2:15
                    </div>
                    <div className="font-medium">
                      CDG • Paris - Charles de Gaulle Airport
                    </div>
                  </div>
                </div>
              </div>
              {/* // RIGHT SIDE INFO /  */}
              <div className="p-4 flex justify-evenly flex-col h-full">
                <div className="w-full flex items-start gap-4 ">
                  <div className=" p-2 rounded-md border">
                    <Image
                      width={25}
                      height={25}
                      src="/SA.svg"
                      alt="Saudi Arabian Airlines"
                      className="h-6"
                    />
                  </div>
                  <div className="space-y-1 text-left">
                    <div className="text-xs text-[#484A4D]">
                      Saudi Arabian Airlines • SV553
                    </div>
                    <div className="text-xs text-[#484A4D]">Economy • A330</div>
                    <div className="text-xs text-[#484A4D]">
                      Flight time 3h 45m
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-start gap-4 ">
                  <div className=" p-2 rounded-md border">
                    <Image
                      width={25}
                      height={25}
                      src="/SA.svg"
                      alt="Saudi Arabian Airlines"
                      className="h-6"
                    />
                  </div>
                  <div className="space-y-1 text-left">
                    <div className="text-xs text-[#484A4D]">
                      Saudi Arabian Airlines • SV553
                    </div>
                    <div className="text-xs text-[#484A4D]">Economy • A330</div>
                    <div className="text-xs text-[#484A4D]">
                      Flight time 3h 45m
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
