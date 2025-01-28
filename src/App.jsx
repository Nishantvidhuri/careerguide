import React from "react";
import Navbar from "./Components/Navbar";
import PriceCard from "./Components/PriceCard";
import ThirdSegment from "./Components/ThirdSegment";
import Footer from "./Components/footer";
import ImageCarousel from "./Components/ImageCarousel";

function App() {
  // Pricing Plans Data
  const pricingPlans = [
    {
      title: "CAREER REPORT",
      oldPrice: "1999",
      discount: "50% off",
      newPrice: "999",
      features: [
        { count: "1", text: "Psychometric Career Test" },
        { count: "1", text: "Psychometric Career Report" },
        { count: "-", text: "E-Book Self Career Counselling" },
      ],
      popular: false,
    },
    {
      title: "RECOMMENDED PLAN",
      oldPrice: "5,999",
      discount: "16% off",
      newPrice: "4,999",
      features: [
        { count: "2", text: "Psychometric Career Test" },
        { count: "2", text: "Psychometric Career Report" },
        { count: "1", text: "Video Career Counselling Session" },
        { count: "-", text: "Personalised Roadmap" },
        { count: "-", text: "E-Book Self Career Counselling" },
        { count: "-", text: "E-Book New Age Careers" },
      ],
      popular: false,
    },
    {
      title: "OUR MOST POPULAR CAREER PLAN",
      oldPrice: "12,999",
      discount: "24% off",
      newPrice: "9,999",
      features: [
        { count: "3", text: "Psychometric Career Test" },
        { count: "3", text: "Psychometric Career Report" },
        { count: "3", text: "Video Career Counselling Session" },
        { count: "-", text: "E-Book Self Career Counselling" },
        { count: "-", text: "E-Book New Age Careers" },
        { count: "-", text: "E-Book New Age Technology" },
        { count: "-", text: "E-Book Digital Career" },
      ],
      popular: true, // Highlighted plan
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="w-2/3 ml-auto mr-32 flex flex-col md:flex-row items-center justify-between mt-10">
        {/* Image Section */}
        <div className="md:order-2">
          <img 
            src="https://www.careerguide.com/images-mcg/award-best-career-guidance.png" 
            alt="National Education Excellence Award"
            className="w-[300px] md:w-[350px]"
          />
        </div>

        {/* Text Section */}
        <div className="text-right translate-x-16 md:order-1">
          {/* Main Heading */}
          <div className="text-[#3f444a] bg-transparent font-robotoCondensed text-[24px] md:text-[28px] font-semibold leading-[36px] uppercase whitespace-nowrap">
            SCIENTIFICALLY PLAN YOUR CAREER
          </div>

          {/* Subheading */}
          <div className="text-[#5c6873] bg-transparent font-robotoCondensed text-[14px] md:text-[16px] font-semibold leading-[24px] whitespace-nowrap">
            FOR SCHOOL/COLLEGE STUDENTS & WORKING PROFESSIONALS
          </div>

          {/* Divider */}
          <div className="w-[45px] h-[3px] bg-[#2ACDC8] mx-auto mt-3"></div>
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="flex justify-center items-end gap-8 mb-12 mt-24">
        
        {/* First Box: 90% of Screen Height */}
        <div className="w-[350px] h-[90vh]  -translate-y-20 flex  items-stretch">
          <PriceCard plan={pricingPlans[0]} />
        </div>

        {/* Second Box: 110% of Screen Height */}
        <div className="w-[350px] h-[110vh] flex items-stretch">
          <PriceCard plan={pricingPlans[1]} />
        </div>

        {/* Third Box: Bottom Aligned with Second, Slightly Lower at Top */}
        <div className="w-[350px] h-[102vh] flex items-stretch">
          <PriceCard plan={pricingPlans[2]} />
        </div>
        
      </div>
      <ThirdSegment />
      <ImageCarousel/>
      <Footer/>
    </div>
  );
}

export default App;
