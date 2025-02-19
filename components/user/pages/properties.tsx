"use client";
import { useState } from "react";
import { Montserrat, Cardo } from "next/font/google";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "300", "500"] });
const cardo = Cardo({ subsets: ["latin"], weight: ["400", "700"] });

const PropertyList = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const properties = [
    {
      name: "9 Central Park",
      image: "/featuredbuilding/CentralPark.webp",
      location: "Marilao, Bulacan",
      details: "No Downpayment, 0% Interest, 38 months to pay",
      price: 15300,
    },
    {
      name: "Uptown Modern",
      image: "/featuredbuilding/Uptown Modern.webp",
      location: "Uptown Bonifacio, Taguig City",
      details: "No Downpayment, 0% Interest, 72 months to pay",
      price: 27000,
    },
    {
      name: "Uptown Arts Residence",
      image: "/featuredbuilding/Uptown Arts Residence.webp",
      location: "Uptown Bonifacio, Taguig City",
      details: "No Downpayment, 0% Interest, 36 months to pay",
      price: 38500,
    },
    {
      name: "Park McKinley West",
      image: "/featuredbuilding/Park McKinly West.webp",
      location: "McKinley West, Fort Bonifacio, Taguig City",
      details: "No Downpayment, 0% Interest, 36 months to pay",
      price: 32400,
    },
  ];

  // Extract unique locations
  const uniqueLocations = [...new Set(properties.map((property) => property.location))];

  // Define price ranges
  const priceRanges = [
    { label: "All Prices", value: "" },
    { label: "Below ₱20,000", value: "0-20000" },
    { label: "₱20,000 - ₱30,000", value: "20000-30000" },
    { label: "₱30,000 - ₱40,000", value: "30000-40000" },
    { label: "Above ₱40,000", value: "40000-" },
  ];

  // Filter properties based on search, location, and price range
  const filteredProperties = properties.filter((property) => {
    const matchesSearch = `${property.name} ${property.location}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation = locationFilter ? property.location === locationFilter : true;

    const matchesPriceRange = (() => {
      if (!priceRange) return true;
      const [min, max] = priceRange.split("-").map(Number);
      return max ? property.price >= min && property.price <= max : property.price >= min;
    })();

    return matchesSearch && matchesLocation && matchesPriceRange;
  });

  // Sorting options logic
  const allSortOptions = [
    { value: "name-asc", label: "Name (A-Z)", opposite: "name-desc" },
    { value: "name-desc", label: "Name (Z-A)", opposite: "name-asc" },
    { value: "location-asc", label: "Location (A-Z)", opposite: "location-desc" },
    { value: "location-desc", label: "Location (Z-A)", opposite: "location-asc" },
    { value: "price-asc", label: "Price (Low to High)", opposite: "price-desc" },
    { value: "price-desc", label: "Price (High to Low)", opposite: "price-asc" },
  ];


  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "location-asc":
        return a.location.localeCompare(b.location);
      case "location-desc":
        return b.location.localeCompare(a.location);
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="mx-auto px-6 py-16 bg-[#F9FAF1] w-full">
   <h2 className={`text-xl sm:text-md text-center text-black mb-2 tracking-widest uppercase ${cardo.className}`}>
  Explore Your Next Home
</h2>
  <p className={`text-sm sm:text-md text-center text-black mb-2 tracking-widest uppercase ${montserrat.className}`}>
  Find the perfect place that suits your lifestyle. 
</p>
 


    <div className="flex justify-between items-center w-full gap-4 mb-6 mt-10">
  {/* Left Side: Title & Search Input */}
  <div className="flex items-center gap-4">
    <h2 className="text-xl font-semibold text-gray-700">PROPERTIES</h2>
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
    <select
      className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8986E] transition"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="">Sort By</option>
      <option value="name-asc">Name (A-Z)</option>
      <option value="name-desc">Name (Z-A)</option>
      <option value="location-asc">Location (A-Z)</option>
      <option value="location-desc">Location (Z-A)</option>
      <option value="price-asc">Price (Low to High)</option>
      <option value="price-desc">Price (High to Low)</option>
    </select>

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

    <select
      className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B8986E] transition"
      value={priceRange}
      onChange={(e) => setPriceRange(e.target.value)}
    >
      {priceRanges.map((range, index) => (
        <option key={index} value={range.value}>
          {range.label}
        </option>
      ))}
    </select>
  </div>
</div>


 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {sortedProperties.length > 0 ? (
          sortedProperties.map((property, index) => (
            <Card key={index} className="p-2 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
              <CardHeader>
                <img src={property.image} alt={property.name} className="w-full h-64 object-cover rounded-lg" />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-lg font-bold text-black">{property.name}</CardTitle>
                <p className="text-gray-700">{property.location}</p>
                <p className="text-[#B8986E] font-semibold">₱{property.price.toLocaleString()} / month</p>
                 <p className="text-[#B8986E] font-semibold">{property.details.toLocaleString()} / month</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-700 text-lg col-span-full">No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
