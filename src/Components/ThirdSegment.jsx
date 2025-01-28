import React from "react";

const ThirdSegment = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col md:flex-row justify-center items-center">
      {/* Left Side - YouTube Video */}
      <div className="w-full md:w-1/2 flex justify-center items-center h-full">
        <iframe
          className="w-full max-w-[600px] h-[300px] md:h-[400px] lg:h-[450px] "
          src="https://www.youtube.com/embed/igVKdmUTQoM"
          title="Why Invest in Career Guidance?"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Right Side - Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start bg-white p-6 md:p-12 shadow-lg">
        {/* Small Banner */}
        <div className="bg-[#2ACDC8] text-white text-xs font-bold uppercase px-4 py-2 rounded-md inline-block">
          Scientifically Plan Your Career
        </div>

        {/* Heading */}
        <h2 className="text-[#3F444A] text-4xl font-robotoCondensed font-bold mt-4 text-center md:text-left">
          A Career Counsellor Can Change Your Life
        </h2>

        {/* Description */}
        <p className="text-[#5C6873] text-[14px] md:text-[16px] leading-6 mt-3 text-center md:text-left max-w-[500px]">
          Investing in Career Guidance & Career counselling helps you understand yourself
          and your career options better, making it easier to make decisions. It also helps
          you learn more about the job market, be happier in your career, and succeed in the long run.
        </p>

        {/* View Pricing Button */}
        <div className="mt-5 w-full flex md:justify-start justify-center">
          <button className="bg-red-500 text-white text-sm font-semibold px-6 py-3  hover:bg-red-600 transition duration-300">
            VIEW PRICING
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdSegment;
