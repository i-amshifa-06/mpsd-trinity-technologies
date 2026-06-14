
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "Internship", path: "/internship" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-[#e1e5f2]/95
      backdrop-blur-md
      border-b
      border-[#1f7a8c]/30
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src="/splash.png"
              alt="MPSD Trinity Technologies"
              className="
              h-12
              w-12
              object-cover
              rounded-[10px]
              shadow-md
              "
            />

            <div>
              <h2
                className="
                text-[#022b3a]
                font-bold
                text-sm
                sm:text-base
                md:text-lg
                leading-tight
                "
              >
                MPSD Trinity Technology
              </h2>

              <p
                className="
                text-[#1f7a8c]
                text-[10px]
                sm:text-xs
                "
              >
                Innovate • Integrate • Impact
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="
                text-[#022b3a]
                hover:text-[#1f7a8c]
                font-medium
                transition-colors
                duration-300
                "
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/careers"
              className="
              bg-[#1f7a8c]
              hover:bg-[#056c92]
              text-white
              px-5
              py-3
              rounded-xl
              font-semibold
              transition-all
              duration-300
              "
            >
              Apply Now
            </Link>

          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
            lg:hidden
            text-[#022b3a]
            text-2xl
            "
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
          lg:hidden
          bg-[#e1e5f2]
          border-t
          border-[#1f7a8c]/30
          "
        >
          <div className="px-6 py-6 flex flex-col gap-5">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="
                text-[#022b3a]
                hover:text-[#1f7a8c]
                transition
                "
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/careers"
              onClick={() => setMenuOpen(false)}
              className="
              mt-2
              bg-[#1f7a8c]
              hover:bg-[#056c92]
              text-white
              py-3
              rounded-xl
              font-semibold
              text-center
              transition-all
              duration-300
              "
            >
              Apply Now
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

