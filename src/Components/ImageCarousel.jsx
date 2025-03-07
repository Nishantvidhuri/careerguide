import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  const images = [
    "https://dwq4lez4vhobf.cloudfront.net/indiatodaybeta.jpg",
    "https://dwq4lez4vhobf.cloudfront.net/toi.png",
    "https://dwq4lez4vhobf.cloudfront.net/The_economic_Times.jpg",
    "https://dwq4lez4vhobf.cloudfront.net/the-tribune.jpg",
    "https://dwq4lez4vhobf.cloudfront.net/tech-circle.jpg",
    "https://dwq4lez4vhobf.cloudfront.net/reliance-foundation.jpg",
    "https://dwq4lez4vhobf.cloudfront.net/amar-ujala.jpg",
    "https://www.careerguide.com/career/wp-content/uploads/2024/03/cnbcnews-removebg-preview-1.png",
    "https://dwq4lez4vhobf.cloudfront.net/Rediff.png",
    "https://dwq4lez4vhobf.cloudfront.net/the-telegraph.jpg",
    "https://dwq4lez4vhobf.cloudfront.net/statesman.jpg",
    "https://dwq4lez4vhobf.cloudfront.net/YourStory.png",
    "https://www.careerguide.com/career/wp-content/uploads/2024/03/dd-news-2.jpg",
    "https://dwq4lez4vhobf.cloudfront.net/indiatoday.jpg",
    "https://dwq4lez4vhobf.cloudfront.net/educationWorld.jpg",
    "https://www.careerguide.com/career/wp-content/uploads/2024/03/rajya-sabha.jpg",
    "https://dwq4lez4vhobf.cloudfront.net/huffington_logo.jpg",
    "https://dwq4lez4vhobf.cloudfront.net/business-standard.png"
  ];

  const [currentImages, setCurrentImages] = useState(images);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      slideImages();
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentImages]);

  const slideImages = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentImages((prevImages) => {
        const [first, ...rest] = prevImages;
        return [...rest, first]; // Move first image to the end
      });
      setIsSliding(false);
    }, 500);
  };

  return (
    <div className="overflow-hidden w-full py-8 flex justify-center ">
      {/* Carousel Wrapper */}
      <div
        className={`flex gap-6 items-center ${
          isSliding ? "transition-transform duration-500 ease-in-out" : ""
        }`}
        style={{
          transform: isSliding ? "translateX(-20%)" : "translateX(0)",
        }}
      >
        {currentImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`brand-${index}`}
            className="h-14 sm:h-16 md:h-20 lg:h-24 object-contain grayscale mx-2"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
