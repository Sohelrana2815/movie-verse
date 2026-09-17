import { NavLink } from "react-router";
import { navLinks } from "../../config/navLinks";
import logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 mx-auto max-w-7xl z-20 bg-[#0F172A]/90 backdrop-blur-md border-b border-[#1E293B]">
      <div className="flex items-center justify-between p-4">
        {/* Brand Logo & Name */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} className="h-7" alt="Flowbite Logo" />
          <span className="self-center text-xl text-white font-semibold whitespace-nowrap">
            Movie Verse
          </span>
        </NavLink>

        {/* CTA Button */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-[#E11D48] hover:bg-[#be123c] active:scale-95 border border-transparent font-medium leading-5 rounded-lg text-sm px-4 py-2 transition-all shadow-md shadow-[#E11D48]/20 focus:outline-none cursor-pointer"
          >
            Get started
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-[#1E293B] rounded-lg bg-[#1E293B] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 px-3 text-slate-300 rounded hover:bg-[#1E293B] md:hover:bg-transparent md:border-0 md:hover:text-[#E11D48] md:p-0 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
