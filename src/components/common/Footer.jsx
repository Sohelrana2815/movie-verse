import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-[#1E293B] shadow-lg">
      <div className="w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-slate-400 sm:text-center">
          © 2026{" "}
          <span className="hover:underline hover:text-[#E11D48] transition-colors">
            Movie Verse™
          </span>
          All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-slate-400 sm:mt-0">
          <li>
            <NavLink
              to="/movies"
              className="hover:underline hover:text-[#E11D48] transition-colors me-4 md:me-6"
            >
              Movies
            </NavLink>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-[#E11D48] transition-colors me-4 md:me-6"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-[#E11D48] transition-colors me-4 md:me-6"
            >
              Licensing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-[#E11D48] transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
