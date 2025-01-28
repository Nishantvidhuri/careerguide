import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white text-xs  mt-10">
      {/* Main Footer Sections */}
      <div className="container mx-auto px-40 py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        
        {/* About Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">ABOUT</h3>
          <ul className="font-thin">
            <li>About</li>
            <li>News</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Refund & Cancellation</li>
            <li>Sitemap</li>
            <li>Partners</li>
            <li>Content Writer Jobs</li>
            <li>Career Blogs</li>
          </ul>
        </div>

        {/* Psychometric Test */}
        <div>
          <h3 className="font-bold text-lg mb-3">PSYCHOMETRIC TEST</h3>
          <ul className="space-y-2">
            <li>Psychometric test</li>
            <li>Ideal Career Test</li>
            <li>Skill based test</li>
            <li>Commerce Career Selector</li>
            <li>Humanities Career Selector</li>
            <li>Professional Skill Index</li>
          </ul>
        </div>

        {/* Schools Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">SCHOOLS</h3>
          <ul className="space-y-2">
            <li>Counselling Services For School</li>
            <li>Career Counselling Services For 9th</li>
            <li>Career Counselling Services For 10th</li>
            <li>Career Counselling Services For 11th</li>
            <li>Career Counselling Services For 12th</li>
            <li>Engineering Entrance Exam</li>
          </ul>
        </div>

        {/* Parents Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">PARENTS</h3>
          <ul className="space-y-2">
            <li>Psychometric Career Tests</li>
            <li>Study in India</li>
            <li>Knowledge Base</li>
            <li>Pricing</li>
            <li>Career Options</li>
          </ul>
        </div>

        {/* Counsellor Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">COUNSELLOR</h3>
          <ul className="space-y-2">
            <li>CareerGuide Profile</li>
            <li>Certification Courses</li>
            <li>Know Your Community</li>
            <li>Counsellor Jobs</li>
            <li>Exclusive Interviews</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-3">LET'S BE FRIENDS</h3>
          <ul className="space-y-2">
            <li>CONTACT US</li>
            <li>+91-8800442358</li>
            <li>customercare@careerguide.com</li>
          </ul>
          <img
            src="https://www.careerguide.com/Images-MCG/playstore.png"
            alt="Google Play"
            className="mt-4 w-[140px]"
          />
        </div>
      </div>
        <hr></hr>
      {/* Students Section */}
      <div className="bg-[#1F1F1F]  py-6 px-28 flex gap-80 text-white text-md">
        <div>
        <p className="font-bold">STUDENTS</p>
        <p>
          <span className="font-bold">For 9th class:</span> Skill Based Career Test | Services | Basic Plan | Advance Plan | Face to Plan | Mentorship Plan
        </p>
        <p>
          <span className="font-bold">For 10th class:</span> Stream Selector Test | Ideal Career Test | Services | Basic Plan | Advance Plan | Face to Face Plan | Mentorship Plan
        </p>
        <p>
          <span className="font-bold">For 11th class:</span> Ideal Career Test | Engineering Branch Selector | Humanities Career Selector | Commerce Career Selector | Services | Basic Plan
        </p>
        <p>
          <span className="font-bold">For 12th class:</span> Engineering Branch Selector | Humanities Career Selector | Commerce Career Selector | Services | Basic Plan | Advance Plan
        </p>
        <p>
          <span className="font-bold">For Working Professionals:</span> Services | Basic Plan | Advance Plan | Face to Face Plan | Ideal Career Test | Professional Skill Index Test
        </p>
        </div>
        
        <img
          src="https://www.careerguide.com/images-mcg/footer-awards-img.png"
          alt="Award 1"
          className="w-[700px] mb-40 h-[300px]"
        />
      </div>

    </footer>
  );
};

export default Footer;
