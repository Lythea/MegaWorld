"use client";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface ResidenceProps {
  residence?: string;
}

const Residence = ({ residence }: ResidenceProps) => {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const residenceData = [
    { name: "Arden", location: "Cavite", division: "Pre-Selling", image: "/residence/property/Property1.jpg" },
    { name: "Capital Town", location: "Pampanga", division: "Ready for Occupancy", image: "/residence/property/Property2.jpg" },
    { name: "Maple Grove", location: "Cavite", division: "New", image: "/residence/property/Property3.jpg" },
    { name: "Southwoods", location: "Laguna", division: "New", image: "/residence/property/Property4.png" },
    { name: "Upper East", location: "Bacolod", division: "Pre-Selling", image: "/residence/property/Property5.jfif" },
    { name: "Westside", location: "Entertainment City", division: "Ready for Occupancy", image: "/residence/property/Property6.jpg" },
  ];

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [search, locationFilter, divisionFilter, typeFilter]);

  useEffect(() => {
    
    if (residence) {
      if (residence ==="new-project"){
        residence ="new"
      }
      setDivisionFilter(residence);
    }
  }, [residence]);

  const uniqueLocations = [...new Set(residenceData.map((item) => item.location))];
  const uniqueDivisions = [...new Set(residenceData.map((item) => item.division))];

const filteredResidences = residenceData.filter((residence) => {
  const matchesSearch = `${residence.name} ${residence.location}`
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesLocation =
    !locationFilter || locationFilter.toLowerCase() === "all" || residence.location.toLowerCase() === locationFilter.toLowerCase();

  const matchesDivision = 
    !divisionFilter || 
    divisionFilter.toLowerCase() === "all" || 
    (divisionFilter.toLowerCase() === "new" && (residence.division.toLowerCase() === "new" || residence.division.toLowerCase() === "new-project")) ||
    divisionFilter.toLowerCase() === residence.division.toLowerCase();  // Match specific divisions like "Pre-Selling" or "Ready for Occupancy"

  return matchesSearch && matchesLocation && matchesDivision;
});

  return (
   <div className="mx-auto px-6 py-16 bg-[#F9FAF1] w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
  <h2 className="text-xl sm:text-lg md:text-xl text-center text-black mb-2 tracking-widest uppercase">
    Discover Premier Residences
  </h2>
  <p className="text-sm sm:text-base md:text-md text-center text-black mb-2 tracking-widest uppercase">
    Find the perfect residence that fits your lifestyle and business needs.
  </p>

  <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 mb-6 mt-10">
    <div className="flex items-center gap-4 w-full sm:w-auto">
      <h2 className="text-xl font-semibold text-gray-700">RESIDENCES</h2>
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
        onChange={(e) => {
          setDivisionFilter(e.target.value);
          console.log("Selected Division:", e.target.value);
        }}
      >
        <option value="">
          {residence
            ? (residence === "new-project"
                ? "New"  // Specifically return "New" if residence is "new-project"
                : residence
                  .toLowerCase()
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())
                  .trim()
              )
            : "All Divisions"}
        </option>
        <option value="">{ "All Divisions" }</option>

        {uniqueDivisions &&
          uniqueDivisions
            .filter((division) => {
              const formattedDivision = division
                .toLowerCase()
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())
                .trim();

              const formattedResidence = residence
                ? (residence === "new-project"
                    ? "New"  // Apply "New" transformation only for "new-project"
                    : residence
                  )
                  .toLowerCase()
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())
                  .trim()
                : "";

              return formattedDivision !== formattedResidence;
            })
            .map((division, index) => (
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
      {filteredResidences.length > 0 ? (
        filteredResidences.map((residence, index) => {
          const divisionColors: Record<string, string> = {
            Luzon: "bg-blue-500",
            Visayas: "bg-yellow-500",
            Mindanao: "bg-green-500",
          };

          const badgeColor = divisionColors[residence.division] || "bg-red-700";

          return (
            <Card key={index} className="relative p-2 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
              <CardHeader className="p-0 relative">
                <span className={`absolute top-3 right-3 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md ${badgeColor}`}>
                  {residence.division}
                </span>
                <img src={residence.image} alt={residence.name} className="w-full h-64 object-cover rounded-lg p-4" />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-lg font-bold text-black">{residence.name}</CardTitle>
                <hr className="my-2 border-gray-300" />
                <p className="text-gray-700">{residence.location}</p>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <p className="text-center text-gray-700 text-lg col-span-full">No residences found.</p>
      )}
    </div>
  )}
</div>

  );
};

export default Residence;
