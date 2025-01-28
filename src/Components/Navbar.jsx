import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-10 w-full bg-white shadow-md p-3">
      <div className="flex justify-between items-center px-5">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="https://i.ibb.co/w0BJt1L/cg-logo.png" alt="CareerGuide Logo" className="h-6" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#5C6873] text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {[
            { label: "Class 10", to: "/class-10" },
            { label: "Class 11-12", to: "/class-11-12" },
            { label: "Counsellors", to: "/counsellors" },
            { label: "Professionals", to: "/professionals" },
            { label: "Study Abroad", to: "/study-abroad" },
            { label: "Psychometric Test", to: "/psychometric-test" },
            { label: "Pricing", to: "/pricing" },
            { label: "Courses", to: "/courses" }
          ].map(({ label, to }) => (
            <li key={to}>
              <Link to={to} className="text-[#5C6873] text-[11px] font-light hover:bg-[#2c65ba] hover:text-white px-4 py-2 rounded-lg cursor-pointer">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section - Contact & Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-[#3939DF] text-[14px] font-medium">918800442358</span>
          <Link to="/signin" className="text-[#5C6873] text-sm font-bold hover:bg-[#2c65ba] hover:text-white px-4 py-2 rounded-lg">
            Sign In
          </Link>
          <Link to="/dashboard" className="text-[#5C6873] text-sm font-bold hover:bg-[#2c65ba] hover:text-white px-4 py-2 rounded-lg">
            My Dashboard
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white shadow-md absolute top-[60px] left-0 w-full space-y-4 py-4">
          {[
            { label: "Class 10", to: "/class-10" },
            { label: "Class 11-12", to: "/class-11-12" },
            { label: "Counsellors", to: "/counsellors" },
            { label: "Professionals", to: "/professionals" },
            { label: "Study Abroad", to: "/study-abroad" },
            { label: "Psychometric Test", to: "/psychometric-test" },
            { label: "Pricing", to: "/pricing" },
            { label: "Courses", to: "/courses" },
            { label: "Sign In", to: "/signin" },
            { label: "My Dashboard", to: "/dashboard" }
          ].map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setIsOpen(false)}
                className="text-[#5C6873] text-[14px] font-light hover:bg-[#2c65ba] hover:text-white px-6 py-3 rounded-lg block"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
