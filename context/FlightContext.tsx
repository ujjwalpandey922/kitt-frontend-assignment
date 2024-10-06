"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";

// Define the shape of the data
interface FlightSearchData {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
}

// Define the context's shape
interface FlightSearchContextProps {
  searchData: FlightSearchData;
  setSearchData: (data: FlightSearchData) => void;
}

// Default values
const defaultSearchData: FlightSearchData = {
  origin: "",
  destination: "",
  departureDate: "",
  returnDate: "",
};

// Create the context
const FlightSearchContext = createContext<FlightSearchContextProps>({
  searchData: defaultSearchData,
  setSearchData: () => {},
});

// Custom hook for consuming the context
export const useFlightSearch = () => useContext(FlightSearchContext);

// Create the provider component
export const FlightSearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchData, setSearchData] =
    useState<FlightSearchData>(defaultSearchData);

  return (
    <FlightSearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </FlightSearchContext.Provider>
  );
};
