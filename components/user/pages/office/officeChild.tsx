"use client";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store'; // Adjust path as needed

interface OfficeProps {
  office?: string;
}

const Office = ({ office }: OfficeProps) => {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const offices = useSelector((state: RootState) => state.officeData.offices);
  
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [search, locationFilter, divisionFilter]);

  useEffect(() => {
    if (office) {
  
      setDivisionFilter(office);
    }
  }, [office]);

  const uniqueLocations = [...new Set(offices.map((item) => item.location))];
  const uniqueDivisions = [...new Set(offices.map((item) => item.division))];

  const filteredOffices = offices.filter((office) => {
    const matchesSearch = `${office.name} ${office.location}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation =
      !locationFilter || locationFilter.toLowerCase() === "all" || office.location.toLowerCase() === locationFilter.toLowerCase();

    const matchesDivision =
      !divisionFilter ||
      divisionFilter.toLowerCase().replace(/-/g, " ").trim() === "all" ||
      divisionFilter.toLowerCase().replace(/-/g, " ").trim() === office.division.toLowerCase().replace(/-/g, " ").trim();

    return matchesSearch && matchesLocation && matchesDivision;
  });

  return (
    <div className="mx-auto px-6 py-16 bg-[#F9FAF1] w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
      <h2 className="text-xl sm:text-lg md:text-xl text-center text-black mb-2 tracking-widest uppercase">
        Discover Premier Office Spaces
      </h2>
      <p className="text-sm sm:text-base md:text-md text-center text-black mb-2 tracking-widest uppercase">
        Find the ideal office space tailored for your business.
      </p>

      <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 mb-6 mt-10">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <h2 className="text-xl font-semibold text-gray-700">OFFICES</h2>
          <input
            type="text"
            placeholder="Search by name or location..."
            className="px-4 py-2 w-full sm:w-60 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8986E] transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-4 w-full sm:w-auto mt-4 sm:mt-0">
          <select
            className="px-4 py-2 w-full sm:w-auto border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8986E] transition"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="">All Locations</option>
            {uniqueLocations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
          <select
            className="px-4 py-2 w-full sm:w-auto border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8986E] transition"
            value={divisionFilter}
            onChange={(e) => setDivisionFilter(e.target.value)}
          >
            <option value="">All Divisions</option>
            {uniqueDivisions.map((division, index) => (
              <option key={index} value={division}>
                {division}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-60">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-[#B8986E] rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredOffices.length > 0 ? (
            filteredOffices.map((office, index) => {
              const divisionColors: Record<string, string> = {
                "For Lease": "bg-red-500",
                "For Sale": "bg-green-500",
                "For Rent": "bg-blue-500",
                
              };
              const badgeColor = divisionColors[office.division] || "bg-gray-500";
              return (
                <Card key={index} className="relative p-2 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
                  <CardHeader className="p-0 relative">
                    <span className={`absolute top-3 right-3 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md ${badgeColor}`}>
                      {office.division}
                    </span>
                    <img src={office.image} alt={office.name} className="w-full h-64 object-cover rounded-lg p-4" />
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardTitle className="text-lg font-bold text-black">{office.name}</CardTitle>
                    <hr className="my-2 border-gray-300" />
                    <p className="text-gray-700">{office.location}</p>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <p className="text-center text-gray-700 text-lg col-span-full">No offices found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Office;