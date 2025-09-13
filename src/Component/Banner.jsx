import React from "react";
import { Star } from "lucide-react";

const Banner = ({
  rating = 4.9,
  reviewCount = 324,
  soldThisMonth = 185,
  maxRating = 5,
}) => {
  // Create array of stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={i}
          className="w-5 h-5 text-transparent"
          style={{
            fill: "url(#bannerStarGradient)",
            filter: "drop-shadow(0 0 2px rgba(251, 146, 60, 0.4))",
          }}
        />
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-5 h-5">
          <Star className="w-5 h-5 text-gray-300 absolute" />
          <div className="overflow-hidden w-1/2">
            <Star
              className="w-5 h-5 text-transparent"
              style={{
                fill: "url(#bannerStarGradient)",
                filter: "drop-shadow(0 0 2px rgba(251, 146, 60, 0.4))",
              }}
            />
          </div>
        </div>
      );
    }

    // Empty stars
    const emptyStars = maxRating - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="py-3">
      {/* SVG Gradient Definition for Stars */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient
            id="bannerStarGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#FB923C" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex items-center justify-left">
        {/* Left Section - Rating */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            {renderStars()}
            <span className="ml-2 text-lg font-semibold text-gray-900">
              {rating}
            </span>
          </div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div className="text-gray-600">
            <span className="text-sm mr-4">{reviewCount} product reviews</span>
          </div>
        </div>

        {/* Right Section - Sales Info */}
        <div className="flex items-center space-x-2">
          <div className="w-px h-4 bg-gray-300"></div>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-medium">
            <span className="font-bold text-sm"> 🔥 {soldThisMonth}</span> sold
            this month
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
