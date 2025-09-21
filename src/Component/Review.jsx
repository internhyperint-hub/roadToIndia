import React, { useState } from "react";
import { User, ThumbsUp, Filter, ChevronDown, Shirt, Banana } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Banner from "./Breakdown";
import Breakdown from "./Breakdown";
const productImage = 'https://roadstoindia.com/cdn/shop/files/roads_to_india_900_900_black.png?v=1678262497&width=500';

const Reviews = () => {
  const [expandedReviews, setExpandedReviews] = useState({});


  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [filterBy, setFilterBy] = useState('all');
  const [helpfulClicks, setHelpfulClicks] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6;

  const toggleReadMore = (reviewId) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));

    // Smooth scroll to the review when expanding
    if (!expandedReviews[reviewId]) {
      setTimeout(() => {
        const reviewElement = document.getElementById(`review-${reviewId}`);
        if (reviewElement) {
          reviewElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }
      }, 100);
    }
  };

  const handleHelpfulClick = (reviewId) => {
    setHelpfulClicks((prev) => ({
      ...prev,
      [reviewId]: (prev[reviewId] || 0) + 1,
    }));
  };


  const mockReviews = [
    {
      id: 1,
      name: "Ravi K.",
      rating: 5,
      title: "Perfect for my Spiti Valley trip!",
      comment: "Just received this yesterday and I'm blown away! The cotton quality is amazing and the print is so vibrant. Perfect for my upcoming Spiti Valley trip. The fit is exactly as described - comfortable and stylish. Highly recommend!",
      date: "2025-09-16",
      verified: true,
      helpful: 2,
      productName: "Lost in Spiti Valley T-Shirt",
      photos: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop"],
      sentiment: "positive",
      badges: ["Top Reviewer", "Early Adopter"]
    },
    {
      id: 2,
      name: "Meera L.",
      rating: 5,
      title: "Love the oversized fit! ❤️",
      comment: "OMG! This t-shirt is everything I wanted. Got it 3 days back and have been wearing it daily. The oversized fit is perfect and so comfortable. Gets so many compliments at work. The cotton quality is incredible - soft and breathable. Ordering another color next!",
      date: "2025-09-14",
      verified: true,
      helpful: 5,
      productName: "Lost in Spiti Valley T-Shirt",
      photos: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop", "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=100&h=100&fit=crop"],
      sentiment: "positive",
      badges: ["Frequent Buyer"]
    },
    {
      id: 3,
      name: "Aditi M.",
      rating: 4,
      title: "Great quality, fast shipping",
      comment: "Ordered this last week and received it in just 2 days! The regular fit is perfect for office wear. Quality is excellent and the fabric feels premium. The Spiti Valley design is subtle yet beautiful. Only wish the sleeves were a bit longer.",
      date: "2025-09-10",
      verified: true,
      helpful: 3,
      productName: "Lost in Spiti Valley T-Shirt",
      sentiment: "positive",
    },
    {
      id: 4,
      name: "Priya S.",
      rating: 5,
      title: "Authentic travel vibes!",
      comment: "Amazing experience! This t-shirt has incredible quality and the Spiti Valley design is so detailed. Fast delivery to Delhi and perfect packaging. The cotton is outstanding - soft and durable. Already placed my second order!",
      date: "2024-01-15",
      verified: true,
      helpful: 12,
      productName: "Lost in Spiti Valley T-Shirt"
    },
    {
      id: 5,
      name: "Arjun P.",
      rating: 4,
      title: "Good quality but runs slightly small",
      comment: "Nice t-shirt overall. The fabric is pleasant and comfortable, but I wish it was a bit larger. The design is beautiful and the quality is good. The cotton feels premium though. Good for people who prefer regular fit.",
      date: "2024-01-12",
      verified: true,
      helpful: 8,
      productName: "Lost in Spiti Valley T-Shirt"
    },
    {
      id: 6,
      name: "Sneha G.",
      rating: 5,
      title: "Like wearing Spiti Valley memories!",
      comment: "This site has an amazing collection! This t-shirt transports me back to Spiti Valley. The mountain design is incredible. Very particular about clothing quality and this delivers on authenticity. The fabric is so soft!",
      date: "2024-01-10",
      verified: true,
      helpful: 15,
      productName: "Lost in Spiti Valley T-Shirt",
      photos: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop"],
      sentiment: "positive"
    },
    {
      id: 7,
      name: "Rahul K.",
      rating: 4,
      title: "Good quality with comfortable fit",
      comment: "The t-shirt has a pleasant and comfortable fit. It's quite soft which works well for daily wear or travel. The packaging is nicely done and feels premium. Perfect for those who prefer comfortable, casual wear rather than tight fitting clothes.",
      date: "2024-01-08",
      verified: true,
      helpful: 6,
      productName: "Lost in Spiti Valley T-Shirt",
      sentiment: "positive"
    },
    {
      id: 13,
      name: "Ananya S.",
      rating: 5,
      title: "Friends keep asking where I got this!",
      comment: "Excellent t-shirt! This Spiti Valley design is absolutely beautiful. I've tried many travel t-shirts over the years, but this stands out. The cotton quality is perfect for daily wear and the design looks premium. Love the oversized fit!",
      date: "2024-01-05",
      verified: true,
      helpful: 20,
      productName: "Lost in Spiti Valley T-Shirt",
      photos: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop", "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=100&h=100&fit=crop"],
      sentiment: "positive",
      badges: ["Expert Reviewer"]
    },
    {
      id: 8,
      name: "Vikram R.",
      rating: 5,
      title: "Worth the money - quality develops beautifully",
      comment: "Good quality t-shirt at decent value. Initially seemed thin, but the fabric is actually very durable. The Spiti Valley design becomes more beautiful after a few washes. Overall satisfied with the purchase.",
      date: "2024-01-03",
      verified: true,
      helpful: 4,
      productName: "Lost in Spiti Valley T-Shirt",
      photos: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop", "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=100&h=100&fit=crop"],
      sentiment: "positive"
    },
    {
      id: 9,
      name: "Kavya N.",
      rating: 3,
      title: "Light and comfortable for sensitive skin",
      comment: "This t-shirt has a very gentle and soft fabric. It's quite comfortable with good breathability, making it perfect for those who prefer delicate fabrics or have sensitive skin. The cotton is pleasant and clean. Great option for people who want something comfortable and not too heavy.",
      date: "2023-12-30",
      verified: true,
      helpful: 3,
      productName: "Lost in Spiti Valley T-Shirt"
    },
    {
      id: 14,
      name: "Rohan J.",
      rating: 4,
      title: "Decent for casual wear",
      comment: "Good for casual, comfortable wear lovers. The delivery was quick and packaging was secure. It's a pleasant t-shirt but nothing extraordinary. Works well for daily routine but you might need to layer for colder weather. Fair value for money.",
      date: "2023-12-28",
      verified: true,
      helpful: 7,
      productName: "Lost in Spiti Valley T-Shirt"
    },
    {
      id: 15,
      name: "Deepika M.",
      rating: 3,
      title: "Different from expectations but decent",
      comment: "This t-shirt has a unique design that's different from what I usually prefer. It's quite comfortable with good quality fabric, which works for casual outings. The presentation is lovely. It might appeal to those who enjoy travel-themed clothing for everyday wear.",
      date: "2023-12-25",
      verified: true,
      helpful: 1,
      productName: "Lost in Spiti Valley T-Shirt"
    },
    {
      id: 16,
      name: "Amit S.",
      rating: 3,
      title: "Decent everyday t-shirt",
      comment: "This is a solid everyday t-shirt with familiar, comfortable fabric. It has good durability and comfort, which is good for casual wear. The design is approachable and versatile. Good value for regular use, and the customer service team was very helpful with my questions.",
      date: "2023-12-20",
      verified: true,
      helpful: 2,
      productName: "Lost in Spiti Valley T-Shirt"
    },
    {
      id: 11,
      name: "Nisha P.",
      rating: 5,
      title: "Perfect for travel adventures!",
      comment: "Absolutely love this! Perfect for travel and outdoor adventures. The design is beautiful and gets compliments every time I wear it. Excellent quality - holds up well after multiple washes. The fabric is gorgeous and looks expensive.",
      date: "2023-12-18",
      verified: true,
      helpful: 14,
      productName: "Lost in Spiti Valley T-Shirt",
      photos: ["https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=100&h=100&fit=crop"],
      sentiment: "positive",
      badges: ["Style Influencer"]
    },
    {
      id: 12,
      name: "Karan R.",
      rating: 4,
      title: "Good but packaging could be better",
      comment: "The t-shirt itself is really nice - comfortable and well-made. However, the outer packaging was a bit damaged during delivery. The t-shirt was fine though. The design is perfect for daily wear and I've gotten several compliments. Will order again.",
      date: "2023-12-15",
      verified: true,
      helpful: 5,
      productName: "Lost in Spiti Valley T-Shirt",
      photos: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop"],
      sentiment: "positive",
      badges: ["Loyal Customer"]
    }
  ];

  // Filter logic
  const filteredReviews = mockReviews.filter(review => {
    let matchesFilter = false;

    switch (filterBy) {
      case 'all':
        matchesFilter = true;
        break;
      case '5star':
        matchesFilter = Number(review.rating) === 5;
        break;
      case '4star':
        matchesFilter = Number(review.rating) >= 4 && Number(review.rating) < 5;
        break;
      case 'verified':
        matchesFilter = Boolean(review.verified);
        break;
      default:
        matchesFilter = true;
    }

    return matchesFilter;
  });

  // Sort logic
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.date) - new Date(a.date);
      case 'helpful':
        return (helpfulClicks[b.id] || b.helpful) - (helpfulClicks[a.id] || a.helpful);
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  // Pagination logic
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = sortedReviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(sortedReviews.length / reviewsPerPage);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={`text-xs ${index < rating ? "text-black" : "text-gray-300"
          }`}
      />
    ));
  };

  const truncateText = (text, limit = 120) => {
    if (text.length <= limit) return text;
    // Find the last space before the limit to avoid cutting words
    const truncated = text.slice(0, limit);
    const lastSpace = truncated.lastIndexOf(' ');
    const cutPoint = lastSpace > limit * 0.8 ? lastSpace : limit;
    return text.slice(0, cutPoint) + "...";
  };

  const getTimeAgo = (dateString) => {
    const reviewDate = new Date(dateString);
    const now = new Date();
    const diffInMs = now - reviewDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "1 day ago";
    if (diffInDays < 30) return `${diffInDays} days ago`;
    if (diffInDays < 365) {
      const months = Math.floor(diffInDays / 30);
      return months === 1 ? "1 month ago" : `${months} months ago`;
    } else {
      const years = Math.floor(diffInDays / 365);
      return years === 1 ? "1 year ago" : `${years} years ago`;
    }
  };

  const averageRating = (
    mockReviews.reduce((sum, review) => sum + review.rating, 0) /
    mockReviews.length
  ).toFixed(1);

  return (
    <div className="w-full mx-auto px-4" style={{ backgroundColor: '#E7E1D7' }}>
      <div className="rounded-2xl shadow-2xl p-8 border border-gray-100">
        {/* Header Section */}
        <div className="mb-12">
          {/* Rating Display */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <div className="flex p-2 rounded-lg">
                {renderStars(4)}
              </div>
              <span className="text-3xl font-bold text-gray-800">
                4.5
              </span>
            </div>
          </div>

          {/* Breakdown Section */}
          <div className="mb-6">
            <Breakdown />
          </div>
        </div>

        {/* Compact Filter Section */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 rounded-lg p-4">
            {/* Left side - Sort and Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-md px-3 py-1.5 pr-6 text-sm focus:ring-2 focus:ring-[#c7aa62] focus:border-transparent outline-none"
                >
                  <option value="recent">Most Recent</option>
                  <option value="helpful">Most Helpful</option>
                  <option value="rating">Highest Rating</option>
                </select>
                <ChevronDown className="absolute right-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-1.5">
                {[
                  { key: 'all', label: 'All' },
                  { key: '5star', label: '5★' },
                  { key: '4star', label: '4★' },
                  { key: 'verified', label: 'Verified' }
                ].map(filter => (
                  <button
                    key={filter.key}
                    onClick={() => setFilterBy(filter.key)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${filterBy === filter.key
                      ? 'bg-gray-700 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right side - View Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">View:</span>
              <div className="bg-white rounded-md p-0.5 shadow-sm border border-gray-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${viewMode === 'grid'
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${viewMode === 'list'
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-center mb-6">
          <p className="text-gray-600">
            Showing {indexOfFirstReview + 1}-{Math.min(indexOfLastReview, sortedReviews.length)} of {sortedReviews.length} reviews
            {filterBy !== 'all' && (
              <span className="ml-2 text-gray-700 font-medium">
                (filtered from {mockReviews.length} total)
              </span>
            )}
          </p>
        </div>

        {/* Reviews Display */}
        <div className={`mb-8 ${viewMode === 'grid'
          ? 'grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'
          : 'space-y-4 max-w-4xl mx-auto'
          }`}>
          {currentReviews.map((review) => (
            <div
              key={review.id}
              id={`review-${review.id}`}
              className={`relative overflow-visible ${viewMode === 'grid'
                ? 'bg-white rounded-lg p-5 shadow-sm'
                : 'bg-white rounded-lg shadow-sm'
                }`}
            >
              {viewMode === 'list' ? (
                // Enhanced List View Layout
                <div className="flex gap-5 p-4">
                  {/* Left Section: User Avatar */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200 ">
                      <User className="w-3 h-3 text-gray-700" />
                    </div>
                  </div>

                  {/* Center Section: Review Content */}
                  <div className="flex-1 min-w-0">
                    {/* Header with name and date */}
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className=" text-gray-800 text-base">{review.name}</span>
                          {/* Reviewer badges in list view */}
                          {review.badges && review.badges.length > 0 && (
                            <div className="flex gap-1">
                              {review.badges.map((badge, index) => (
                                <span
                                  key={index}
                                  className="bg-purple-50 text-purple-600 text-[10px] px-2 py-1 rounded-full font-medium"
                                >
                                  {badge}
                                </span>
                              ))}
                            </div>
                          )}
                          <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                            {getTimeAgo(review.date)}
                          </span>
                        </div>
                        {/* Stars below name */}
                        <div className="flex items-center space-x-2">
                          <div className="flex text-shadow-2xs">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-sm font-bold text-gray-800">{review.rating}.0</span>
                        </div>
                      </div>

                      {/* Verified badge and product name */}
                      <div className="flex flex-col items-end space-y-1 relative">
                        {review.verified && (
                          <div className="bg-green-50 text-green-600 px-2 py-1 rounded text-xs font-medium border border-green-200">
                            Verified
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Review title and content */}
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="text-gray-600 text-sm italic leading-tight flex-1">
                        {review.title}
                      </h5>
                    </div>
                    <div className="relative mb-3">
                      <div className={`text-gray-600 leading-relaxed text-xs font-normal  pl-4  transition-all duration-300 overflow-hidden ${expandedReviews[review.id] ? 'max-h-24' : 'max-h-20'}`}>
                        {expandedReviews[review.id]
                          ? review.comment
                          : truncateText(review.comment, 150)}
                        {review.comment.length > 150 && (
                          <button
                            onClick={() => toggleReadMore(review.id)}
                            className="text-gray-500 hover:text-gray-700 text-xs underline ml-1"
                          >
                            {expandedReviews[review.id] ? "show less" : "more"}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Review Photos with inline product name and buttons */}
                    {review.photos && review.photos.length > 0 ? (
                      <div className="mb-3">
                        <div className="flex items-center justify-between mt-2">
                          {/* Photos section */}
                          <div className="flex gap-2">
                            {review.photos.map((photo, index) => (
                              <div key={index} className="relative group">
                                <img
                                  src={photo}
                                  alt={`Review photo ${index + 1}`}
                                  className="w-16 h-16 object-cover rounded-lg border border-gray-200 cursor-pointer shadow-sm"
                                />
                                <div className="absolute inset-0 bg-black/0 rounded-lg"></div>
                              </div>
                            ))}
                          </div>

                          {/* Product name and buttons inline with photos */}
                          <div className="flex items-center space-x-3 ml-4">
                            <span className="inline-flex items-center space-x-1 text-[10px] font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-full">
                              <Shirt className="w-3 h-3 text-gray-600" />
                              <span>{review.productName}</span>
                            </span>

                            <button
                              onClick={() => handleHelpfulClick(review.id)}
                              className={`inline-flex items-center space-x-1 transition-all text-xs group px-2 py-1 rounded-md ${helpfulClicks[review.id] > 0
                                ? 'bg-gray-700 text-white shadow-sm hover:bg-gray-800'
                                : 'bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                              <ThumbsUp className={`w-3 h-3  ${helpfulClicks[review.id] > 0 ? 'fill-current' : ''
                                }`} />
                              <span className="font-medium">
                                {(helpfulClicks[review.id] || 0) + review.helpful}
                              </span>
                            </button>

                            {/* Product Image beside thumbs up in list view */}
                            <div className="w-10 h-10 opacity-60">
                              <img
                                src={productImage}
                                alt="Product"
                                className="w-full h-full object-contain"
                              />
                            </div>

                            {/* Brand liked indicator */}
                            {review.rating >= 5 && [1, 13, 11].includes(review.id) && (
                              <span className="text-[9px] text-blue-600 bg-blue-50 px-2 py-1 rounded-md font-medium">
                                Brand liked
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Product name and buttons when no photos */
                      <div className="mb-3">
                        <div className="flex items-center justify-end mt-2">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => handleHelpfulClick(review.id)}
                              className={`inline-flex items-center space-x-1 transition-all text-xs group px-2 py-1 rounded-md ${helpfulClicks[review.id] > 0
                                ? 'bg-gray-700 text-white shadow-sm hover:bg-gray-800'
                                : 'bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                              <ThumbsUp className={`w-3 h-3  ${helpfulClicks[review.id] > 0 ? 'fill-current' : ''
                                }`} />
                              <span className="font-medium">
                                {(helpfulClicks[review.id] || 0) + review.helpful}
                              </span>
                            </button>

                            {/* Product Image beside thumbs up in list view no photos */}
                            <div className="w-10 h-10 opacity-60">
                              <img
                                src={productImage}
                                alt="Product"
                                className="w-full h-full object-contain"
                              />
                            </div>

                            {/* Brand liked indicator */}
                            {review.rating >= 5 && [1, 13, 11].includes(review.id) && (
                              <span className="text-[9px] text-blue-600 bg-blue-50 px-2 py-1 rounded-md font-medium">
                                Brand liked
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                // Grid View Layout
                <>
                  {/* Header: User info and rating */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200">
                          <User className="w-3 h-3 text-gray-700" />
                        </div>
                        {review.verified && (
                          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full border border-white flex items-center justify-center shadow-lg">
                            <svg className="w-1.5 h-1.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-gray-800 text-base">{review.name}</span>
                          {/* Reviewer badges in grid view */}
                          {review.badges && review.badges.length > 0 && (
                            <div className="flex gap-1">
                              {review.badges.slice(0, 1).map((badge, index) => (
                                <span
                                  key={index}
                                  className="bg-purple-50 text-purple-600 text-[10px] px-2 py-1 rounded-full font-medium"
                                >
                                  {badge}
                                </span>
                              ))}
                              {review.badges.length > 1 && (
                                <span className="text-[10px] text-gray-400">+{review.badges.length - 1}</span>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">                            <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                            <span className="text-sm font-bold text-gray-800">{review.rating}.0</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Days ago in top right */}
                    <div className="flex flex-col items-end space-y-1 relative">
                      <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                        {getTimeAgo(review.date)}
                      </span>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="mb-3">
                    <h5 className="text-gray-600 text-sm italic leading-tight mb-2">
                      {review.title}
                    </h5>
                    <div className="relative">
                      <div className={`text-gray-600 leading-relaxed text-xs font-normal bg-gray-50/30 py-3 px-3 rounded-md transition-all duration-300 overflow-hidden ${expandedReviews[review.id] ? 'max-h-20' : 'max-h-16'}`}>
                        {expandedReviews[review.id]
                          ? review.comment
                          : truncateText(review.comment, 100)}
                        {review.comment.length > 100 && (
                          <button
                            onClick={() => toggleReadMore(review.id)}
                            className="text-gray-500 hover:text-gray-700 text-xs underline ml-1"
                          >
                            {expandedReviews[review.id] ? "show less" : "more"}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Review Photos in Grid View with inline product name and buttons */}
                    {review.photos && review.photos.length > 0 ? (
                      <div className="mt-2">
                        <div className="flex items-center justify-between">
                          {/* Photos section */}
                          <div className="flex gap-1">
                            {review.photos.slice(0, 2).map((photo, index) => (
                              <div key={index} className="relative group">
                                <img
                                  src={photo}
                                  alt={`Review photo ${index + 1}`}
                                  className="w-12 h-12 object-cover rounded-md border border-gray-200 cursor-pointer shadow-sm"
                                />
                                <div className="absolute inset-0 bg-black/0 rounded-md"></div>
                              </div>
                            ))}
                          </div>

                          {/* Product name and buttons inline with photos */}
                          <div className="flex flex-col items-end space-y-1 ml-2">
                            <div className="flex items-center space-x-1.5">
                              <Shirt className="w-2.5 h-2.5 text-gray-600" />
                              <span className="text-[9px] font-medium text-gray-700">
                                {review.productName}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <button
                                onClick={() => handleHelpfulClick(review.id)}
                                className={`flex items-center space-x-1 transition-all text-[10px] group px-1.5 py-0.5 rounded-md ${helpfulClicks[review.id] > 0
                                  ? 'bg-gray-700 text-white shadow-sm hover:bg-gray-800'
                                  : 'bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200'
                                  }`}
                              >
                                <ThumbsUp className={`w-2.5 h-2.5  ${helpfulClicks[review.id] > 0 ? 'fill-current' : ''
                                  }`} />
                                <span className="font-medium">
                                  {(helpfulClicks[review.id] || 0) + review.helpful}
                                </span>
                              </button>
                              {/* Product Image beside thumbs up */}
                              <div className="w-10 h-10 opacity-60">
                                <img
                                  src={productImage}
                                  alt="Product"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              {/* Brand liked indicator */}
                              {review.rating >= 5 && [1, 13, 11].includes(review.id) && (
                                <span className="text-[7px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-md font-medium">
                                  Brand liked
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Product name and buttons when no photos in grid view */
                      <div className="mt-2">
                        <div className="flex items-center justify-end">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1.5">
                              <Shirt className="w-2.5 h-2.5 text-gray-600" />
                              <span className="text-[9px] font-medium text-gray-700">
                                {review.productName}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <button
                                onClick={() => handleHelpfulClick(review.id)}
                                className={`flex items-center space-x-1 transition-all text-[10px] group px-1.5 py-0.5 rounded-md ${helpfulClicks[review.id] > 0
                                  ? 'bg-gray-700 text-white shadow-sm hover:bg-gray-800'
                                  : 'bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200'
                                  }`}
                              >
                                <ThumbsUp className={`w-2.5 h-2.5  ${helpfulClicks[review.id] > 0 ? 'fill-current' : ''
                                  }`} />
                                <span className="font-medium">
                                  {(helpfulClicks[review.id] || 0) + review.helpful}
                                </span>
                              </button>
                              {/* Product Image beside thumbs up */}
                              <div className="w-10 h-10 opacity-60">
                                <img
                                  src={productImage}
                                  alt="Product"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              {/* Brand liked indicator */}
                              {review.rating >= 5 && [1, 13, 11].includes(review.id) && (
                                <span className="text-[7px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-md font-medium">
                                  Brand liked
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mb-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg font-medium ${currentPage === index + 1
                  ? 'bg-[#c7aa62] text-white'
                  : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}

        {/* Write Review Button */}

      </div>
    </div>
  );
};

export default Reviews;