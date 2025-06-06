import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { clientConfig } from "../client-config";

const Header: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Home", to: "/", key: "home" },
    { name: "Services", to: "/#services", key: "services" },
    { name: "About Us", to: "/#about", key: "about" },
    { name: "Contact", to: "/#contact", key: "contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-[#272627] shadow-sm border-b-[2px] border-primary">
      <div className="h-24 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-24 xl:px-28 2xl:px-48">
        <Link to="/" className="">
          <img className="" alt="logo" src={clientConfig.logo}/>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-4">
          {links.map(({ name, to, key }) => (
            <Link
              key={key}
              to={to}
              className="tab"
              onClick={() => setSelectedLocation(key)}
            >
              <p className={`text-md font-medium font-LemonMilk ${selectedLocation === key ? "text-primary" : "text-base-100"}`}>
                {name}
              </p>
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md bg-primary focus:outline-none focus:ring"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <nav className="md:hidden bg-[#272627] shadow-md">
          <div className="flex flex-col items-center py-4 space-y-4">
            {links.map(({ name, to, key }) => (
              <Link
                key={key}
                to={to}
                className="w-full text-center"
                onClick={() => {
                  setSelectedLocation(key);
                  setMobileOpen(false);
                }}
              >
                <p className={`text-lg font-medium ${selectedLocation === key ? "text-primary" : "text-base-100"}`}>
                  {name}
                </p>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
