import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function NavbarSection() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "font-bold text-red-900"
      : "hover:text-red-700";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-rose-300">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-5 text-red-800">

        {/* LOGO */}
        <div className="uppercase text-lg">
          <span className="font-extrabold text-rose-800">My</span>
          <span className="font-extralight">Portfolio</span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-6 underline">
          <li>
            <NavLink to="/" className={linkClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </li>
        </ul>

        {/* HAMBURGER */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU (MUNCUL SAAT DIKLIK) */}
      {open && (
        <div className="md:hidden bg-rose-200 px-6 py-4 shadow">
          <ul className="flex flex-col space-y-4 underline">
            <li>
              <NavLink
                to="/"
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
