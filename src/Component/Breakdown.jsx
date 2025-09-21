import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Breakdown = () => {

  const mockReviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      comment:
        "Amazing product from Roads to India! This Spiti Valley design is perfect for daily wear.",
      date: "2024-01-15",
      verified: true,
    },
    {
      id: 2,
      name: "Arjun Patel",
      rating: 5,
      comment:
        "Excellent value from Roads to India. Authentic cotton quality at great prices!",
      date: "2024-01-12",
      verified: true,
    },
    {
      id: 3,
      name: "Sneha Gupta",
      rating: 5,
      comment:
        "Love this product! Perfect Spiti Valley design. Roads to India is fantastic!",
      date: "2024-01-10",
      verified: true,
    },
    {
      id: 4,
      name: "Rahul Kumar",
      rating: 5,
      comment:
        "Quality product from Roads to India. This fabric is so comfortable and looks great!",
      date: "2024-01-08",
      verified: true,
    },
    {
      id: 5,
      name: "Ananya Singh",
      rating: 5,
      comment: "Excellent product! Roads to India delivered authentic quality cotton.",
      date: "2024-01-05",
      verified: true,
    },
    {
      id: 6,
      name: "Vikram Reddy",
      rating: 2,
      comment:
        "Product didn't fit as expected. Roads to India service was good though.",
      date: "2024-01-03",
      verified: true,
    },
    {
      id: 7,
      name: "Kavya Nair",
      rating: 5,
      comment:
        "Best product from Roads to India! Authentic Spiti Valley design is amazing.",
      date: "2024-08-30",
      verified: true,
    },
    {
      id: 8,
      name: "Rohan Joshi",
      rating: 5,
      comment:
        "Quick delivery from Roads to India. Perfect comfortable fit for office wear.",
      date: "2024-08-28",
      verified: true,
    },
    {
      id: 9,
      name: "Meera Agarwal",
      rating: 5,
      comment:
        "Perfect product from Roads to India. This design keeps me feeling stylish all day.",
      date: "2024-08-25",
      verified: true,
    },
    {
      id: 10,
      name: "Karan Mehta",
      rating: 1,
      comment: "Not what I expected. The design was too bold for my preference.",
      date: "2024-08-22",
      verified: false,
    },
    {
      id: 11,
      name: "Divya Iyer",
      rating: 5,
      comment:
        "Amazing results! My friends keep asking where I got this product.",
      date: "2024-08-20",
      verified: true,
    },
    {
      id: 12,
      name: "Siddharth Bose",
      rating: 4,
      comment: "Value for money product. Works well for daily casual wear.",
      date: "2024-08-18",
      verified: true,
    },
    {
      id: 13,
      name: "Riya Kapoor",
      rating: 5,
      comment:
        "Love the cotton quality! No irritation and keeps me comfortable.",
      date: "2024-08-15",
      verified: true,
    },
    {
      id: 14,
      name: "Amit Saxena",
      rating: 3,
      comment: "Average product. Roads to India delivery was fine but design is not my type.",
      date: "2024-08-12",
      verified: false,
    },
    {
      id: 15,
      name: "Pooja Desai",
      rating: 5,
      comment:
        "Fantastic combo pack! Both products complement each other perfectly.",
      date: "2024-08-10",
      verified: true,
    },
  ];

  const calculateRatingBreakdown = () => {
    // Fake numbers for better visualization
    const breakdown = { 5: 187, 4: 45, 3: 18, 2: 8, 1: 4 };
    return breakdown;
  };

  const calculateStats = () => {
    // Use fake numbers to match the breakdown
    const totalReviews = 262; // Sum of breakdown numbers
    const verifiedReviews = 218;
    const averageRating = 4.8;

    return {
      total: totalReviews,
      verified: verifiedReviews,
      unverified: totalReviews - verifiedReviews,
      average: averageRating,
      verifiedPercentage: ((verifiedReviews / totalReviews) * 100).toFixed(1),
    };
  };

  const getRecentReviews = () => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    return mockReviews.filter(
      (review) => new Date(review.date) >= thirtyDaysAgo
    ).length;
  };

  const ratingBreakdown = calculateRatingBreakdown();
  const stats = calculateStats();
  const recentCount = getRecentReviews();

  const _renderStars = (count) => {
    return "".repeat(count) + "".repeat(5 - count);
  };

  const getBarWidth = (count) => {
    return (count / stats.total) * 100;
  };

  return (
    <div className="max-w-[500px]  bg-white mx-auto  rounded-2xl overflow-auto">
      <div className=" rounded-lg shadow-lg p-4 border border-gray-100" >
        <div className="mb-4">


        </div>

        {/* Rating Distribution */}
        <div className="mb-6">

          <div className="flex justify-center">
            <div className="space-y-0.5 w-full max-w-md">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2 p-1 rounded-md">
                  <div className="flex items-center space-x-2 w-16">
                    <span className="text-sm font-medium text-gray-700 w-3">{rating}</span>
                    <div className="flex gap-0.2">
                      {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={faStar}
                          className={`text-xs ${index < rating ? 'text-gray-700' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mx-6 flex-1 bg-gray-200 rounded-full h-4 relative overflow-hidden">
                    <div
                      className="h-4 rounded-2xl bg-gray-700"
                      style={{
                        width: `${getBarWidth(ratingBreakdown[rating])}%`,

                      }}
                    />
                  </div>

                  <div className="text-xs text-gray-600 w-8 text-right font-medium">
                    {ratingBreakdown[rating]}
                  </div>

                  <div className="text-xs text-gray-500 w-12 text-right">
                    {((ratingBreakdown[rating] / stats.total) * 100).toFixed(0)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <ReviewStatsPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        stats={stats}
        recentCount={recentCount}
        ratingBreakdown={ratingBreakdown}
      /> */}
    </div>
  );
};

export default Breakdown;
