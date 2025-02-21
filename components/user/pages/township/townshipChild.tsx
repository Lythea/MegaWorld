import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store'; // Adjust path as needed
 
interface TownshipProps {
  township?: string;
}

const Township = ({ township }: TownshipProps) => {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const townshipData = useSelector((state: RootState) => state.townshipData.allDevelopments) || [];

  console.log(townshipData);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [search, locationFilter, divisionFilter, typeFilter]);

  useEffect(() => {
    if (township) {
      setDivisionFilter(township);
    }
  }, [township]);

  const uniqueLocations = [...new Set(townshipData.map((item) => item.location))];
  const uniqueDivisions = [...new Set(townshipData.map((item) => item.division))];

  const filteredTownships = townshipData.filter((township) => {
    const matchesSearch = `${township.name} ${township.location}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation =
      !locationFilter || locationFilter.toLowerCase() === "all" || township.location.toLowerCase() === locationFilter.toLowerCase();

    const matchesDivision =
      !divisionFilter ||
      divisionFilter.toLowerCase() === "all" ||
      township.division.toLowerCase() === divisionFilter.replace(/-/g, " ").toLowerCase();

    return matchesSearch && matchesLocation && matchesDivision;
  });

  return (
 <div className="mx-auto px-4 sm:px-6 py-10 bg-[#F9FAF1] w-full sm:w-[90%] lg:w-[70%]">
  <h2 className="text-lg sm:text-xl text-center text-black mb-2 tracking-widest uppercase">
    Discover Premier Townships
  </h2>
  <p className="text-sm sm:text-md text-center text-black mb-2 tracking-widest uppercase">
    Find the perfect township that fits your lifestyle and business needs.
  </p>


  <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-6 mb-6 mt-6">
    {/* Search Bar */}
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
        TOWNSHIPS
      </h2>
      <input
        type="text"
        placeholder="Search by name or location..."
        className="px-4 py-2 w-full sm:w-60 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8986E] transition"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

   
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full justify-end">
      {/* Location Filter */}
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


  <option value="">
    {township
      ? township
          .toLowerCase()
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())
          .trim()
      : "All Divisions"}
  </option>
   <option value="">
    {"All Divisions"}
  </option>
  {/* Filter out the formatted township to avoid duplication */}
  {uniqueDivisions &&
    uniqueDivisions
      .filter(
        (division) =>
          division.toLowerCase().replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()).trim() !==
          (township
            ? township
                .toLowerCase()
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())
                .trim()
            : "")
      )
      .map((division, index) => (
        <option key={index} value={division}>
          {division}
        </option>
      ))}
</select>





    </div>
  </div>
      {/* Townships Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-60">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-[#B8986E] rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredTownships.length > 0 ? (
            filteredTownships.map((township, index) => (
              <Card
                key={index}
                className="relative p-2 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300"
              >
                <CardHeader className="p-0 relative">
                  <img
                    src={township.image}
                    alt={township.name}
                    className="w-full h-64 object-cover rounded-lg p-4"
                  />
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-lg font-bold text-black">
                    {township.name}
                  </CardTitle>
                  <hr className="my-2 border-gray-300" />
                  <p className="text-gray-700">{township.location}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-700 text-lg col-span-full">
              No townships found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Township;
