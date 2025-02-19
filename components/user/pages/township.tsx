"use client";
import { useEffect, useState } from "react";

import { Montserrat, Cardo } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "300", "500"] });
const cardo = Cardo({ subsets: ["latin"], weight: ["400", "700"] });

interface TownshipProps {
  township?: string;
}

const Township = ({ township }: TownshipProps) => {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [continentFilter, setContinentFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const townshipData = [
    {
      name: "McKinley Hill",
      image: "/townships/mckinleyhill.webp",
      location: "Taguig City",
      specificLocation: "Fort Bonifacio",
      division: "Residential",
      type: "Mixed-Use",
      continent: "Luzon",
    },
    {
      name: "Uptown Bonifacio",
      image: "/townships/uptown.webp",
      location: "Taguig City",
      specificLocation: "Uptown Area",
      division: "Commercial",
      type: "High-Rise",
      continent: "Luzon",
    },
    {
      name: "Eastwood City",
      image: "/townships/eastwood.webp",
      location: "Quezon City",
      specificLocation: "Libis",
      division: "Business District",
      type: "Tech Hub",
      continent: "Luzon",
    },
    {
      name: "Alabang West",
      image: "/townships/alabang.webp",
      location: "Las Piñas City",
      specificLocation: "Daang Hari",
      division: "Luxury",
      type: "Gated Community",
      continent: "Luzon",
    },
    {
      name: "Cebu Business Park",
      image: "/townships/cebu.webp",
      location: "Cebu City",
      specificLocation: "Banilad",
      division: "Commercial",
      type: "Mixed-Use",
      continent: "Visayas",
    },
    {
      name: "Davao Park District",
      image: "/townships/davao.webp",
      location: "Davao City",
      specificLocation: "Tugbok District",
      division: "Business District",
      type: "Tech Hub",
      continent: "Mindanao",
    },
  ];
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [search, locationFilter, divisionFilter, typeFilter, continentFilter]);

  useEffect(() => {
    if (township) {
      setContinentFilter(township);
    }
  }, [township]);


  const uniqueContinents = [...new Set(townshipData.map((item) => item.continent))];
  const uniqueLocations = [...new Set(townshipData.map((item) => item.location))];
  const uniqueDivisions = [...new Set(townshipData.map((item) => item.division))];
  const uniqueTypes = [...new Set(townshipData.map((item) => item.type))];

  const filteredTownships = townshipData.filter((township) => {
    const matchesSearch = `${township.name} ${township.location} ${township.specificLocation}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation = locationFilter
      ? township.location.toLowerCase() === locationFilter.toLowerCase()
      : true;

    const matchesDivision = divisionFilter
      ? township.division.toLowerCase() === divisionFilter.toLowerCase()
      : true;

    const matchesType = typeFilter
      ? township.type.toLowerCase() === typeFilter.toLowerCase()
      : true;

    const matchesContinent = continentFilter
      ? township.continent.toLowerCase() === continentFilter.toLowerCase()
      : true;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesDivision &&
      matchesType &&
      matchesContinent
    );
  });

  return (
    <div className="mx-auto px-6 py-16 bg-[#F9FAF1] w-full">
      <h2 className="text-xl sm:text-md text-center text-black mb-2 tracking-widest uppercase">
        Discover Premier Townships
      </h2>
      <p className="text-sm sm:text-md text-center text-black mb-2 tracking-widest uppercase">
        Find the perfect township that fits your lifestyle and business needs.
      </p>

     <div className="flex justify-between items-center w-full gap-4 mb-6 mt-10">
  {/* Left Side: Title & Search Input */}
  <div className="flex items-center gap-4">
    <h2 className="text-xl font-semibold text-gray-700">TOWNSHIPS</h2>
    <input
      type="text"
      placeholder="Search by name or location..."
      className="px-4 py-2 w-60 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8986E] transition"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  {/* Right Side: Select Dropdowns */}
  <div className="flex gap-4">
    {/* Location Filter Dropdown */}
    <select
      className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8986E] transition"
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

    {/* Division Filter Dropdown */}
    <select
      className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8986E] transition"
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

    {/* Type Filter Dropdown */}
    <select
      className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8986E] transition"
      value={typeFilter}
      onChange={(e) => setTypeFilter(e.target.value)}
    >
      <option value="">All Types</option>
      {uniqueTypes.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </select>

    {/* Continent Filter Dropdown */}
    <select
      className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8986E] transition"
      value={continentFilter}
      onChange={(e) => setContinentFilter(e.target.value)}
    >
      <option value="">All Continents</option>
      {uniqueContinents.map((continent, index) => (
        <option key={index} value={continent}>
          {continent}
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
        <div className="flex flex-wrap gap-4 justify-center">
          {filteredTownships.map((township, index) => (
            <div key={index} className="w-60 h-80 bg-white shadow-md rounded-lg">
              <img src={township.image} alt={township.name} className="w-full h-32 object-cover rounded-t-lg" />
              <div>
                <h3 className="text-lg font-semibold">{township.name}</h3>
                <p className="text-sm text-gray-500">{township.location}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Township;
