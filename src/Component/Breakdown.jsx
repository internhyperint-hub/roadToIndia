import React, { useState } from "react";
import { Star, User, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const ReviewComment = ({ comment }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 120;

  const shouldTruncate = comment.length > maxLength;
  const displayComment = isExpanded ? comment : comment.substring(0, maxLength);

  return (
    <p className="text-gray-700 leading-relaxed bg-gray-50 p-3 rounded-lg italic">
      "{displayComment}
      {!isExpanded && shouldTruncate && "..."}"
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-2 text-blue-400 hover:text-blue-600 text-sm font-medium"
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </p>
  );
};

const ReviewBreakdown = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const reviewData = {
    averageRating: 4.8,
    totalReviews: 147,
    breakdown: [
      { stars: 5, count: 98, percentage: 66.7 },
      { stars: 4, count: 34, percentage: 23.1 },
      { stars: 3, count: 12, percentage: 8.2 },
      { stars: 2, count: 2, percentage: 1.4 },
      { stars: 1, count: 1, percentage: 0.7 },
    ],
  };

  const sampleReviews = [
    {
      id: 1,
      name: "Arjun M.",
      location: "Mumbai, Maharashtra",
      rating: 5,
      date: "2 days ago",
      comment:
        "Amazing microfiber cloths! The 600 GSM quality is outstanding. Perfect for car detailing - leaves no streaks on windows and paint. Super absorbent and gentle on all surfaces.",
      verified: true,
    },
    {
      id: 2,
      name: "Priya S.",
      location: "Bangalore, Karnataka",
      rating: 5,
      date: "1 week ago",
      comment:
        "Great for car cleaning sessions. These cloths work perfectly for both interior and exterior. They absorb water amazingly and don't leave any lint behind.",
      verified: true,
    },
    {
      id: 3,
      name: "Rajesh K.",
      location: "Delhi, NCR",
      rating: 4,
      date: "2 weeks ago",
      comment:
        "Good quality microfiber cloths. Pack of 2 is great value. Could be slightly more durable but overall satisfied with purchase. The 600 GSM rating shows.",
      verified: false,
    },
    {
      id: 4,
      name: "Sneha T.",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      date: "3 days ago",
      comment:
        "Excellent for car washing! These cloths are super soft and don't scratch the paint. Perfect absorbency and easy to clean after use. Worth every penny.",
      verified: true,
    },
    {
      id: 5,
      name: "Amit P.",
      location: "Pune, Maharashtra",
      rating: 4,
      date: "5 days ago",
      comment:
        "Very good microfiber cloths for the price. Great for dashboard cleaning and exterior polishing. Slightly expensive but quality justifies the cost.",
      verified: true,
    },
    {
      id: 6,
      name: "Kavya N.",
      location: "Hyderabad, Telangana",
      rating: 5,
      date: "1 week ago",
      comment:
        "Outstanding quality! These cloths are a game-changer for car care. No more streaks or water spots. Professional-grade quality at home.",
      verified: false,
    },
    {
      id: 7,
      name: "Rohit V.",
      location: "Kolkata, West Bengal",
      rating: 4,
      date: "10 days ago",
      comment:
        "Good purchase. The cloths are thick and absorb well. Perfect for weekend car cleaning. Would recommend to other car enthusiasts.",
      verified: true,
    },
    {
      id: 8,
      name: "Deepika M.",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Fantastic microfiber cloths! My husband loves using them for car detailing. They're gentle on paint and super effective for cleaning.",
      verified: true,
    },
    {
      id: 9,
      name: "Vikash S.",
      location: "Jaipur, Rajasthan",
      rating: 4,
      date: "3 weeks ago",
      comment:
        "Great quality for the price. Works well for both wet and dry cleaning. Durable construction and maintains softness after multiple washes.",
      verified: false,
    },
    {
      id: 10,
      name: "Ravi K.",
      location: "Indore, Madhya Pradesh",
      rating: 5,
      date: "4 days ago",
      comment:
        "Superb microfiber cloths! Perfect for my SUV cleaning. The 600 GSM really makes a difference. No streaks, no lint, just clean results.",
      verified: true,
    },
    {
      id: 11,
      name: "Meera T.",
      location: "Kochi, Kerala",
      rating: 4,
      date: "1 week ago",
      comment:
        "Good investment for car care. These cloths are gentle yet effective. My car's paint looks better than ever. Highly recommend for detail work.",
      verified: true,
    },
    {
      id: 12,
      name: "Suresh M.",
      location: "Nagpur, Maharashtra",
      rating: 5,
      date: "6 days ago",
      comment:
        "Outstanding quality! Been using for my taxi business. Customers appreciate the spotless finish. Worth every rupee spent.",
      verified: false,
    },
    {
      id: 13,
      name: "Anitha R.",
      location: "Coimbatore, Tamil Nadu",
      rating: 4,
      date: "2 weeks ago",
      comment:
        "Very satisfied with purchase. Perfect for weekly car washes. Absorbs water well and dries quickly. Good value pack of 2.",
      verified: true,
    },
    {
      id: 14,
      name: "Karan J.",
      location: "Chandigarh, Punjab",
      rating: 5,
      date: "8 days ago",
      comment:
        "Best microfiber cloths I've used! Professional grade quality at home. My hatchback looks showroom fresh after every clean.",
      verified: true,
    },
    {
      id: 15,
      name: "Pooja B.",
      location: "Bhopal, Madhya Pradesh",
      rating: 4,
      date: "10 days ago",
      comment:
        "Great product for car enthusiasts. The cloths are thick and absorbent. Perfect for dashboard and exterior cleaning.",
      verified: false,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-transparent" : "text-gray-300"
        }`}
        style={
          i < rating
            ? {
                fill: "url(#starGradient)",
                filter: "drop-shadow(0 0 2px rgba(251, 146, 60, 0.4))",
              }
            : {}
        }
      />
    ));
  };

  const getBarColor = (stars) => {
    if (stars >= 4) return "bg-gradient-to-r from-yellow-400 to-orange-400";
    if (stars === 3) return "bg-gradient-to-r from-yellow-300 to-orange-300";
    if (stars === 2) return "bg-gradient-to-r from-yellow-200 to-orange-200";
    return "bg-gradient-to-r from-yellow-100 to-orange-100";
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    const maxIndex = Math.ceil(sampleReviews.length / 3) - 1;

    if (isLeftSwipe && currentReviewIndex < maxIndex) {
      setCurrentReviewIndex((prev) => prev + 1);
    }
    if (isRightSwipe && currentReviewIndex > 0) {
      setCurrentReviewIndex((prev) => prev - 1);
    }

    // Reset touch values
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="bg-white rounded-xl p-6 mx-auto shadow-sm w-full border-0">
      {/* SVG Gradient Definition for Stars */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#FB923C" />
          </linearGradient>
        </defs>
      </svg>
      {/* Overall Rating */}
      <div className="flex items-center justify-center mb-10">
        <div className="text-4xl font-bold text-black mr-4">
          {reviewData.averageRating}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center mb-1">
            {renderStars(Math.floor(reviewData.averageRating))}
          </div>
          <div className="text-gray-600 text-sm">
            {reviewData.totalReviews} reviews
          </div>
        </div>
      </div>

      {/* Rating Breakdown Section */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
          Rating Breakdown
        </h3>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-2">
            {reviewData.breakdown.map((item) => (
              <div key={item.stars} className="flex items-center space-x-3">
                {/* Star Rating */}
                <div className="flex items-center space-x-1 w-24">
                  {renderStars(item.stars)}
                </div>

                {/* Progress Bar */}
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getBarColor(
                      item.stars
                    )} transition-all duration-700 ease-out`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>

                {/* Count and Percentage */}
                <div className="flex items-center space-x-1 w-16 text-right">
                  <span className="text-sm font-medium text-gray-900">
                    {item.count}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({item.percentage}%)
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-around bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-3">
              <div className="text-center">
                <div className="text-xl font-bold text-yellow-600">
                  {Math.round(
                    ((reviewData.breakdown[0].count +
                      reviewData.breakdown[1].count) /
                      reviewData.totalReviews) *
                      100
                  )}
                  %
                </div>
                <div className="text-sm text-gray-600">Recommend</div>
              </div>
              <div className="w-px h-10 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-xl font-bold text-orange-600">
                  {reviewData.breakdown[0].count}
                </div>
                <div className="text-sm text-gray-600">5-Star Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reviews Carousel Section */}
      <div className="relative">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Recent Customer Reviews
          </h3>
          <p className="text-gray-600 text-sm">
            What our customers are saying about Car Dhobi products
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={() => {
              const maxIndex = Math.ceil(sampleReviews.length / 3) - 1;
              setCurrentReviewIndex(
                currentReviewIndex === 0 ? maxIndex : currentReviewIndex - 1
              );
            }}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-full p-3 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={() => {
              const maxIndex = Math.ceil(sampleReviews.length / 3) - 1;
              setCurrentReviewIndex(
                currentReviewIndex === maxIndex ? 0 : currentReviewIndex + 1
              );
            }}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 border-2 border-gray-200 rounded-full p-3 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Carousel Content - 3 reviews at a time */}
          <div
            className="overflow-hidden rounded-2xl mx-8 bg-gradient-to-br from-gray-50 to-white p-6 shadow-lg"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentReviewIndex * 100}%)`,
              }}
            >
              {Array.from(
                { length: Math.ceil(sampleReviews.length / 3) },
                (_, pageIndex) => (
                  <div key={pageIndex} className="w-full flex-shrink-0 px-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {sampleReviews
                        .slice(pageIndex * 3, (pageIndex + 1) * 3)
                        .map((review) => (
                          <div
                            key={review.id}
                            className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                          >
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-100 to-transparent rounded-bl-3xl"></div>

                            <div className="relative z-10">
                              <div className="flex items-start space-x-4 mb-5">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                                  <User className="w-6 h-6 text-yellow-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <span className="font-bold text-gray-900 text-base">
                                      {review.name}
                                    </span>
                                    {review.verified && (
                                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold border border-green-200">
                                        ✓ Verified
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex items-center space-x-1 text-xs">
                                    <MapPin className="w-3 h-3 text-blue-400" />
                                    <span className="text-blue-400 font-medium">
                                      {review.location}
                                    </span>
                                  </div>
                                </div>
                                <span className="text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full border">
                                  {review.date}
                                </span>
                              </div>

                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-1">
                                  {renderStars(review.rating)}
                                </div>
                                <span className="text-sm font-bold text-gray-800 bg-gray-100 px-2 py-1 rounded-full">
                                  {review.rating}/5
                                </span>
                              </div>

                              <div className="rounded-sm text-xs">
                                <ReviewComment comment={review.comment} />
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from(
              { length: Math.ceil(sampleReviews.length / 3) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`transition-all duration-300 ${
                    currentReviewIndex === index
                      ? "w-8 h-3 bg-yellow-500 rounded-full shadow-lg"
                      : "w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400 hover:scale-125"
                  }`}
                />
              )
            )}
          </div>

          {/* Page Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {currentReviewIndex + 1} of {Math.ceil(sampleReviews.length / 3)}{" "}
              pages
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBreakdown;
