"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { GoX } from "react-icons/go";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import FlightSearchBox from "./FlightSearchBox";
const SearchHeader = ({ type }: { type?: string }) => {
  const [setIsTopBarOpen, setSetIsTopBarOpen] = useState(false);
  const router = useRouter();
  console.log({ type });
  return (
    <div className="flex w-full items-center justify-between max-w-[80rem] py-4 relative">
      <div className="border rounded-full px-4 py-2 shadow-md flex items-center gap-4">
        {/* AIRPORT INFO  */}
        <div className="flex items-center  space-x-2">
          <span className="text-[#001F1D] font-medium">CDG</span>
          <span className="text-[#787B80]">Paris Charles De Gaulle</span>
          <span className="text-[#E6E8EB]">|</span>
          <span className="text-[#001F1D] font-medium">DXB</span>
          <span className="text-[#787B80]">Dubai International</span>
        </div>
        {/* DIVIDER  */}
        <span className="text-[#E6E8EB]">|</span>
        {/* DATE INFO  */}
        <span className="text-[#001F1D] font-medium">Jun 25 - Jul 2</span>
        {/* DIVIDER  */}
        <span className="text-[#E6E8EB]">|</span>
        {/* SEARCH ICON  */}
        <div
          className="flex items-center cursor-pointer p-2 rounded-full bg-[#E5EBEB]"
          onClick={() => setSetIsTopBarOpen(true)}
        >
          <Search className="text-[#003E39] w-4 h-4" />
        </div>
      </div>
      {/* CROSS AT THE END  */}
      <div
        onClick={() => router.push("/")}
        className="text-gray-500 border p-2 border-[#E6E8EB] rounded-full cursor-pointer"
      >
        <GoX />
      </div>
      {/* ----------- DRAWER FOR FLIGHT INFO ------------- */}
      {type === "result" && (
        <Drawer
          direction="top"
          open={setIsTopBarOpen}
          onOpenChange={setSetIsTopBarOpen}
        >
          <DrawerContent className="right-0 top-0 left-0 fixed z-50 flex outline-none w-full ">
            <div className="w-full h-1/2 border-b py-6 border-[#E6E8EB] flex flex-col items-center justify-center flex-1">
              <FlightSearchBox type="result" />
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default SearchHeader;
