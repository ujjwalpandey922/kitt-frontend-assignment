import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { TbCurrentLocation } from "react-icons/tb";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaExchangeAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import airportsInfo from "@/airport.json"; // Import the context
import { useFlightSearch } from "@/context/FlightContext";
import { SelectSingleEventHandler } from "react-day-picker";

type FlightSearchBoxType = {
  handleSearch?: () => void;
  type?: string;
};

const FlightSearchBox: FC<FlightSearchBoxType> = ({ handleSearch, type }) => {
  const { searchData, setSearchData } = useFlightSearch(); // Use the context

  const handleFromAirportChange = (fromAirport: string) => {
    setSearchData({ ...searchData, origin: fromAirport });
  };

  const handleToAirportChange = (toAirport: string) => {
    setSearchData({ ...searchData, destination: toAirport });
  };

  const handleDepartureDateChange = (date: Date) => {
    setSearchData({ ...searchData, departureDate: date.toISOString() });
  };

  const handleReturnDateChange = (date: Date) => {
    setSearchData({ ...searchData, returnDate: date.toISOString() });
  };

  return (
    <div className="w-full flex-col flex gap-4 items-center justify-start">
      {!type && (
        <h1 className="text-3xl font-medium mb-4 mt-10 text-center">
          Good afternoon, Brian
        </h1>
      )}
      <div
        className={
          type === "result"
            ? "bg-white w-full p-4 "
            : "bg-white border border-[#E6E8EB] rounded-lg shadow-lg p-6 w-full max-w-6xl"
        }
      >
        <div
          className={`${type === "result" ? " max-w-5xl mx-auto" : " "}
          flex flex-col gap-4 items-start justify-center w-full`}
        >
          {!type && (
            <div className="bg-[#F5F7FA] font-medium text-[#000C0B] px-6 py-2 rounded-md ">
              Flights
            </div>
          )}
          <div className="flex w-full items-center justify-between gap-4">
            {/* From Airport Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className=" w-full flex truncate  justify-between max-w-[15rem] text-[#C9CACC] p-4"
                >
                  <div className="gap-2 flex truncate">
                    {!searchData.origin && (
                      <TbCurrentLocation size={20} className="shrink-0" />
                    )}
                    <div className="flex flex-col ">
                      <span className="text-[#484A4D] mr-auto">
                        Where From?
                      </span>
                      {searchData.origin && (
                        <span className="text-base  mr-auto text-[#0f0f0f]">
                          {searchData.origin}
                        </span>
                      )}
                    </div>
                  </div>
                  <IoIosArrowDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuRadioGroup
                  value={searchData.origin}
                  onValueChange={handleFromAirportChange}
                >
                  {airportsInfo.airports.map((airport) => (
                    <React.Fragment key={airport.code}>
                      <DropdownMenuRadioItem value={airport.name}>
                        <div className="w-full flex items-center justify-between text-base leading-none">
                          <div className="space-y-1">
                            <h1>{airport.country}</h1>
                            <span className="text-gray-400 text-sm">
                              {airport.city}
                            </span>
                          </div>
                          <span>{airport.code}</span>
                        </div>
                      </DropdownMenuRadioItem>
                    </React.Fragment>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Swap Icon */}
            <Button className="bg-[#F5F7FA] text-black p-1  h-10 w-10 rounded-full hover:bg-[#e0e2e4]">
              <FaExchangeAlt />
            </Button>

            {/* To Airport Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex justify-between truncate w-full max-w-[15rem] p-4 text-[#C9CACC]"
                >
                  <div className="gap-2 flex">
                    {!searchData.destination && (
                      <TbCurrentLocation size={20} className="shrink-0" />
                    )}
                    <div className="flex flex-col">
                      <span className="text-[#484A4D] mr-auto">Where To?</span>
                      {searchData.destination && (
                        <span className="text-base mr-auto text-[#0f0f0f]">
                          {searchData.destination}
                        </span>
                      )}
                    </div>
                  </div>
                  <IoIosArrowDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuRadioGroup
                  value={searchData.destination}
                  onValueChange={handleToAirportChange}
                >
                  {airportsInfo.airports.map((airport) => (
                    <React.Fragment key={airport.code}>
                      <DropdownMenuRadioItem value={airport.name}>
                        <div className="w-full flex items-center justify-between text-base leading-none">
                          <div className="space-y-1">
                            <h1>{airport.country}</h1>
                            <span className="text-gray-400 text-sm">
                              {airport.city}
                            </span>
                          </div>
                          <span>{airport.code}</span>
                        </div>
                      </DropdownMenuRadioItem>
                    </React.Fragment>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Departure Date */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[200px] justify-start text-left font-normal p-4",
                    !searchData.departureDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {searchData.departureDate ? (
                    format(new Date(searchData.departureDate), "PPP")
                  ) : (
                    <span>Departure</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={
                    searchData.departureDate
                      ? new Date(searchData.departureDate)
                      : undefined
                  }
                  onSelect={
                    handleDepartureDateChange as
                      | SelectSingleEventHandler
                      | undefined
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {/* Return Date */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[200px] justify-start text-left font-normal p-4",
                    !searchData.returnDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {searchData.returnDate ? (
                    format(new Date(searchData.returnDate), "PPP")
                  ) : (
                    <span>Return</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={
                    searchData.returnDate
                      ? new Date(searchData.returnDate)
                      : undefined
                  }
                  onSelect={
                    handleReturnDateChange as
                      | SelectSingleEventHandler
                      | undefined
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          {/* Search Button */}
          <div className="flex justify-end w-full pt-6">
            <Button
              className="bg-[#003E39] hover:bg-[#003e39ce] w-full max-w-[15rem] space-x-2 text-white px-6 py-3"
              onClick={handleSearch}
            >
              <FiSearch />
              <span>Search flights</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchBox;
