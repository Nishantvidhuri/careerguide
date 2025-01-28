import React from "react";
import { FaCheckCircle, FaBook, FaVideo, FaFileAlt } from "react-icons/fa";

const PriceCard = ({ plan }) => {
  // Function to return the appropriate icon
  const getIcon = (featureText) => {
    if (featureText.toLowerCase().includes("test")) return <FaCheckCircle />;
    if (featureText.toLowerCase().includes("report")) return <FaFileAlt />;
    if (featureText.toLowerCase().includes("video")) return <FaVideo />;
    if (featureText.toLowerCase().includes("e-book")) return <FaBook />;
    return <FaCheckCircle />;
  };

  return (
    <div
      className={`border-2 p-8 w-[350px] md:w-[400px] lg:w-[450px]  shadow-lg ${
        plan.popular ? "bg-[#2ACDC8] text-white" : "border-[#2ACDC8] text-black"
      }`}
    >
      {/* Plan Title (Professional Look) */}
      <div
  className={`flex justify-center items-center w-full text-xs font-bold uppercase tracking-wide whitespace-nowrap mx-auto my-2 p-2 ${
    plan.popular ? "bg-white text-[#3F444A]" : "bg-[#2ACDC8] text-[#3F444A]"
  }`}
>
  {plan.title}
</div>




      {/* Old Price & Discount */}
      <div className="text-center mt-6">
        <p
          className={`text-[22px] font-semibold line-through ${
            plan.popular ? "text-[#3F444A]" : "text-[#3f444a]"
          }`}
        >
          {plan.oldPrice}₹
        </p>
        <p className={`text-[18px] font-bold ${plan.popular ? "text-red-500" : "text-red-500"}`}>
          {plan.discount} off
        </p>
      </div>

      {/* New Price */}
      <div className="flex justify-center mt-4">
        <div
          className={` font-bold text-[26px] px-6 py-3 rounded-md ${
            plan.popular ? "text-[#2ACDC8]" : "text-white"
          }
          ${plan.popular? "bg-white":"bg-[#2ACDC8]"}
          `}
        >
          {plan.newPrice}₹
        </div>
      </div>

      {/* Features List with Full-Width Underline & White Text */}
      <ul className="mt-6 text-[15px] md:text-[16px]">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className={`relative flex items-center pb-2 ${
              index !== plan.features.length - 1 ? "mb-2" : ""
            }`}
          >
            <div
              className={`flex items-center w-full border-b pb-2 ${
                plan.popular ? "border-white" : "border-gray-400"
              }`}
            >
              <span className={`text-lg  mr-3 ${plan.popular ? "text-white" : "text-[#3F444A]"}`}>
                {getIcon(feature.text)}
              </span>
              <span className={`w-full font-semibold ${plan.popular ? "text-[#3f444a]" : "text-[#3F444A]"}`}>
                {feature.count} {feature.text}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className="flex justify-center mt-6">
        <button
          className={`border-2 px-6 py-3 font-semibold text-[16px] uppercase rounded-md ${
            plan.popular ? "border-white text-white hover:bg-white hover:text-[#2ACDC8]" 
                         : "border-[#2ACDC8] text-black hover:bg-[#2ACDC8] hover:text-white"
          } transition duration-300`}
        >
          Get Started »
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
