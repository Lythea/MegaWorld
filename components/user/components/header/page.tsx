"use client";

import { useState, useEffect, useRef } from "react"; // Import useRef

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["900", "600", "700"] });

const navItems = [
  { title: "TOWNSHIPS", href: "/user/township", submenu: ["Metro Manila", "Luzon", "Visayas", "Mindanao", "Watch Videos", "Talk of the Townships"] },
  { title: "RESIDENCES", href: "/residences", submenu: ["New Projects", "Pre-selling", "Ready for Occupancy", "Payment Channels"] },
  { title: "HOTELS", href: "/hotels", submenu: ["Belmont Hotels", "Richmonde Hotels", "Savoy Hotels", "Other homegrown brands", "Club Access"] },
  { title: "LIFESTYLE MALLS", href: "/malls", submenu: ["Lifestyle Malls", "Community Malls", "Up and coming"] },
  { title: "PREMIUM OFFICES", href: "/offices", submenu: ["Corporate Towers", "Business Centers", "Shared Spaces"] },
  { title: "CUSTOM SERVICES", href: "/services", submenu: ["Contact Us", "Company", "Corporate Governance", "Company Disclosures", "Investor Relations", "Awards", "Careers"] },
  { title: "VISIT OUR SHOWROOM", href: "/showroom", submenu: ["Schedule a Visit", "Virtual Tour"] },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const pathname = usePathname();
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null); // Store timeout reference

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed bg-black top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black shadow-md" : "bg-black"}`}>
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/user">
              <Image src="/logo/megaworld-white.png" alt="MegaWorld Logo" width={250} height={75} priority className="w-36 sm:h-5 md:w-full md:h-full" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center space-x-6 ${montserrat.className}`}>
            {navItems.map((item, index) => (
                <div
              key={index}
              className="relative group"
              onMouseEnter={() => {
                if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                setActiveDropdown(index);
              }}
              onMouseLeave={() => {
                dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 200); // Delay closing
              }}
            >
                <NavLink href={item.href} active={pathname === item.href}>
                  {item.title}
                </NavLink>

                {/* Dropdown Menu */}
                {item.submenu.length > 0 && activeDropdown === index && (
                  <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={`${item.href}/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-5 py-3 text-gray-700 font-medium hover:bg-[#B8986E] hover:text-white transition-all duration-200 rounded-md"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-xl text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
   <div
  className={`absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
    isOpen ? "block opacity-100" : "hidden opacity-0"
  }`}
>

          <nav className="flex flex-col py-4 space-y-3">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <div
                  className="flex justify-between px-6 py-2 text-gray-800 text-sm cursor-pointer hover:bg-gray-100"
                  onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                >
                  {item.title}
                  {item.submenu.length > 0 && <span>{activeDropdown === index ? "▲" : "▼"}</span>}
                </div>

                {/* Mobile Dropdown */}
                {activeDropdown === index && (
                  <div className="bg-gray-100 px-6 py-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
          key={subIndex}
          href={`${item.href}/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
          className="block py-2 text-gray-700 hover:text-[#B8986E]"
          onClick={() => setIsOpen(false)} // Ensure menu closes when clicking a link
        >
          {subItem}
        </Link>

                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

function NavLink({ href, children, active, onClick }: { href: string; children: string; active?: boolean; onClick?: () => void }) {
  return (
    <Link
      href={href}
      className={`px-4 py-2  transition-colors duration-300 text-sm text-black ${
        active ? "text-[#B8986E]" : "text-white"
      } hover:text-[#B8986E]`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
