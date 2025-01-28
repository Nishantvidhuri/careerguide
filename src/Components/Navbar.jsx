// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" fixed top-0 z-10 w-full bg-white shadow-md p-[5px] flex items-center">
      <div className="flex mr-20 ml-5 items-center space-x-4">
        <img src="https://i.ibb.co/w0BJt1L/cg-logo.png" alt="CareerGuide Logo" className="h-6" />
      </div>
      <ul className="flex flex-wrap justify-center items-center">
        <li>
          <Link
            to="/class-10"
            className="text-[#5C6873] font-helvetica text-[11px] font-light hover:bg-[#2c65ba] hover:text-white px-[13px] py-[8px] rounded-[7px] cursor-pointer"
          >
            Class 10
          </Link>
        </li>
        <li>
          <Link
            to="/class-11-12"
            className="text-[#5C6873] font-helvetica text-[11px] font-light hover:bg-[#2c65ba] hover:text-white px-[13px] py-[8px] rounded-[7px] cursor-pointer"
          >
            Class 11-12
          </Link>
        </li>
        <li>
          <Link
            to="/counsellors"
            className="text-[#5C6873] font-helvetica text-[11px] font-light hover:bg-[#2c65ba] hover:text-white px-[13px] py-[8px] rounded-[7px] cursor-pointer"
          >
            Counsellors
          </Link>
        </li>
        <li>
          <Link
            to="/professionals"
            className="text-[#5C6873] font-helvetica text-[11px] font-light hover:bg-[#2c65ba] hover:text-white px-[13px] py-[8px] rounded-[7px] cursor-pointer"
          >
            Professionals
          </Link>
        </li>
        <li>
          <Link
            to="/study-abroad"
            className="text-[#5C6873] font-helvetica text-[11px] font-light hover:bg-[#2c65ba] hover:text-white px-[13px] py-[8px] rounded-[7px] cursor-pointer"
          >
            Study Abroad
          </Link>
        </li>
        <li>
          <Link
            to="/psychometric-test"
            className="text-[#5C6873] font-helvetica text-[11px] font-light hover:bg-[#2c65ba] hover:text-white px-[13px] py-[8px] rounded-[7px] cursor-pointer"
          >
            Psychometric Test
          </Link>
        </li>
        <li>
          <Link
            to="/pricing"
            className="text-[#5C6873] font-helvetica text-[11px] font-light hover:bg-[#2c65ba] hover:text-white px-[13px] py-[8px] rounded-[7px] cursor-pointer"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="/courses"
            className="text-[#5C6873] font-helvetica text-[11px] font-light hover:bg-[#2c65ba] hover:text-white px-[13px] py-[8px] rounded-[7px] cursor-pointer"
          >
            Courses
          </Link>
        </li>
        {/* Phone Number Styled Based on Image */}
        <li className="text-[#3939DF] font-robotoCondensed translate-y-0.5 text-[14px] font-medium px-[13px] py-[8px] cursor-pointer">
          918800442358
        </li>
      </ul>
      <div className="flex items-center  ml-12 space-x-2">
        <Link
          to="/signin"
          className="text-[#5C6873] font-helvetica text-sm font-bold hover:bg-[#2c65ba] hover:text-white px-[13px] py-[8px] rounded-[7px] cursor-pointer"
        >
          Sign In
        </Link>
        <Link
          to="/dashboard"
          className="text-[#5C6873] font-helvetica  text-sm font-bold  hover:bg-[#2c65ba] hover:text-white px-[13px] py-[8px] rounded-[7px] cursor-pointer"
        >
          My Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
