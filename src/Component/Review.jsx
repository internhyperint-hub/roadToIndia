import React, { useState } from "react";
import { Star, ThumbsUp, User, Car, MapPin } from "lucide-react";

// Car SVG Icons for different car types
const CarIcon = ({ type, className }) => {
  const carTypes = {
    sedan: (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M5,11L6.5,6.5H17.5L19,11M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6Z" />
      </svg>
    ),
    suv: (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M5,11L6.5,6.5H17.5L19,11" />
      </svg>
    ),
    hatchback: (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M6,19V21H4V20A2,2 0 0,1 2,18V12L4.5,6.5C4.71,6.05 5.18,5.8 5.66,5.8H18.34C18.82,5.8 19.29,6.05 19.5,6.5L22,12V18A2,2 0 0,1 20,20V21H18V19H6M6.5,16A1.5,1.5 0 0,0 8,14.5A1.5,1.5 0 0,0 6.5,13A1.5,1.5 0 0,0 5,14.5A1.5,1.5 0 0,0 6.5,16M17.5,16A1.5,1.5 0 0,0 19,14.5A1.5,1.5 0 0,0 17.5,13A1.5,1.5 0 0,0 16,14.5A1.5,1.5 0 0,0 17.5,16M7,7V12H17V7H7Z" />
      </svg>
    ),
  };

  return carTypes[type] || carTypes.sedan;
};

const ReviewsSection = () => {
  const [sortBy, setSortBy] = useState("newest");
  const [showAllReviews, setShowAllReviews] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      carType: "sedan",
      carModel: "Honda City",
      rating: 5,
      date: "2 days ago",
      verified: true,
      review:
        "Excellent microfiber cloths! These Car Dhobi Elite 600 GSM cloths are amazing for car detailing. Super absorbent and leaves no streaks on the windshield. The quality is outstanding - perfect for both interior and exterior cleaning. Highly recommended for car enthusiasts!",
      helpful: 12,
      images: [],
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Bangalore, Karnataka",
      carType: "hatchback",
      carModel: "Maruti Swift",
      rating: 4,
      date: "1 week ago",
      verified: true,
      review:
        "Good quality microfiber cloths with excellent GSM rating. Very soft and gentle on car paint. Works great for polishing and drying. Only minor issue is they attract lint initially, but overall very satisfied with the purchase for car care.",
      helpful: 8,
      images: [],
    },
    {
      id: 3,
      name: "Mohammed Ali",
      location: "Delhi, NCR",
      carType: "suv",
      carModel: "Tata Harrier",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
      review:
        "Amazing product! The 600 GSM rating really shows in performance. My car detailing business uses these exclusively now. Customers love the streak-free finish. These cloths are durable and wash well. Highly recommended for professional car care.",
      helpful: 15,
      images: [],
    },
    {
      id: 4,
      name: "Rohit Gupta",
      location: "Pune, Maharashtra",
      carType: "sedan",
      carModel: "Hyundai Verna",
      rating: 1,
      date: "2 weeks ago",
      verified: true,
      review:
        "Very disappointed with this purchase. The cloths started shedding fibers after just a few uses. Poor stitching quality and they lost their absorbency quickly. Customer service was unhelpful. Would not recommend this product for car care.",
      helpful: 4,
      images: [],
    },
    {
      id: 5,
      name: "Deepika Jain",
      location: "Chennai, Tamil Nadu",
      carType: "hatchback",
      carModel: "Hyundai i20",
      rating: 2,
      date: "1 week ago",
      verified: false,
      review:
        "Expected much better quality for this price. The cloths feel thin despite the 600 GSM claim. Started fraying after few washes. Not as absorbent as advertised. Save your money and buy regular car cleaning cloths instead.",
      helpful: 2,
      images: [],
    },
    {
      id: 6,
      name: "Sneha Patel",
      location: "Ahmedabad, Gujarat",
      carType: "suv",
      carModel: "Mahindra XUV500",
      rating: 4,
      date: "3 weeks ago",
      verified: true,
      review:
        "Great microfiber cloths for car cleaning! My husband has been using them for weekend car washes. They're very effective at removing dust and water spots. Good value for money considering you get a pack of 2.",
      helpful: 6,
      images: [],
    },
    {
      id: 7,
      name: "Arjun Reddy",
      location: "Hyderabad, Telangana",
      carType: "sedan",
      carModel: "Toyota Camry",
      rating: 1,
      date: "3 days ago",
      verified: true,
      review:
        "Worst car cleaning cloths ever! They leave micro-scratches on the paint despite being marketed as safe. Poor quality control and terrible customer service. These cloths damaged my car's clear coat. Total waste of money!",
      helpful: 1,
      images: [],
    },
    {
      id: 8,
      name: "Vikash Singh",
      location: "Kolkata, West Bengal",
      carType: "suv",
      carModel: "Ford EcoSport",
      rating: 5,
      date: "1 month ago",
      verified: true,
      review:
        "Perfect for car detailing! Weather resistant and maintains softness after multiple washes. Works perfectly for cleaning dashboard, windows, and exterior. Super absorbent and durable. Best microfiber cloths I've ever bought for car care!",
      helpful: 10,
      images: [],
    },
    {
      id: 9,
      name: "Kavya Nair",
      location: "Jaipur, Rajasthan",
      carType: "hatchback",
      carModel: "Tata Tiago",
      rating: 2,
      date: "5 days ago",
      verified: false,
      review:
        "Not worth the hype. The cloths are okay but nothing special for car cleaning. Quality doesn't justify the premium price. My husband got bored of using them quickly. Overpriced for what you get. Regular car wash cloths work better.",
      helpful: 0,
      images: [],
    },
    {
      id: 10,
      name: "Anita Roy",
      location: "Lucknow, Uttar Pradesh",
      carType: "sedan",
      carModel: "Skoda Rapid",
      rating: 3,
      date: "1 month ago",
      verified: false,
      review:
        "Cloth quality is decent but had some issues with lint initially. Customer support helped with care instructions. Works fine now for car cleaning. Would have been 4 stars if the initial quality was better.",
      helpful: 3,
      images: [],
    },
  ];

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 6);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="mt-8 bg-gradient-to-br from-gray-50 to-white rounded-xl p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Customer Reviews</h2>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
        >
          <option value="newest">Newest First</option>
          <option value="helpful">Most Helpful</option>
          <option value="rating">Highest Rating</option>
        </select>
      </div>

      <div className="space-y-8">
        {displayedReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start space-x-6">
              {/* Car Icon and User Avatar */}
              <div className="flex-shrink-0 flex flex-col items-center space-y-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-4 h-4 text-yellow-500" />
                </div>
              </div>

              <div className="flex-1">
                {/* Header with name, verification, and date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-bold text-lg text-gray-900">
                      {review.name}
                    </h3>
                    {review.verified && (
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {review.date}
                  </span>
                </div>

                {/* Location and rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-medium text-blue-400 bg-blue-50 px-1 rounded-full">
                      {review.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex">{renderStars(review.rating)}</div>
                    <span className="text-sm font-semibold text-gray-700">
                      ({review.rating}/5)
                    </span>
                  </div>
                </div>

                {/* Review content */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 leading-relaxed italic">
                    "{review.review}"
                  </p>
                </div>

                {/* Helpful button */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 text-sm transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span>Helpful ({review.helpful})</span>
                  </button>
                  <div className="flex items-center space-x-1 text-xs text-gray-400">
                    <CarIcon
                      type={review.carType}
                      className="w-4 h-4 text-gray-500"
                    />
                    <span className="capitalize">{review.carType} Owner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {reviews.length > 6 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAllReviews(!showAllReviews)}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg font-medium"
          >
            {showAllReviews
              ? "Show Less Reviews"
              : `View All ${reviews.length} Reviews`}
          </button>
        </div>
      )}
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <ReviewsSection />
    </div>
  );
};

export default Reviews;
