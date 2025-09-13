import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import {
  Search,
  User,
  ShoppingCart,
  Minus,
  Plus,
  MessageCircle,
} from "lucide-react";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top announcement bar */}
          <div className="bg-yellow-400 text-black text-center py-2 text-sm font-medium overflow-hidden whitespace-nowrap">
            <div className="animate-marquee">
              📢 FLAT 20% OFF ON PREPAID PAYMENTS! 🛍️ BIG BILLION SALE LIVE! 😍
              🚚FREE SHIPPING!⚡ 📢 FLAT 20% OFF ON PREPAID PAYMENTS! 🛍️ BIG
              BILLION SALE LIVE!
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mr-4">
                <div className="text-white text-center">
                  <div className="text-xs">car</div>
                  <div className="text-lg font-bold">dhobi</div>
                </div>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-black">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                Our Exclusive Products
              </a>
              <div className="relative group">
                <a
                  href="#"
                  className="text-gray-700 hover:text-black flex items-center"
                >
                  Complete Car Care
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </div>
              <a href="#" className="text-gray-700 hover:text-black">
                Motorbike Care
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                Contact us
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600" />
              <User className="w-5 h-5 text-gray-600" />
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-gray-600">
          <a href="#" className="hover:text-black">
            Home
          </a>
          <span className="mx-2"></span>
          <a href="#" className="hover:text-black">
            Bundle
          </a>
          <span className="mx-2"></span>
          <span className="text-gray-900">
            Car Dhobi Elite 600 GSM Microfiber Cloth (Pack of 2)
          </span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="flex">
            {/* Thumbnail Images */}
            <div className="flex flex-col space-y-4 mr-4">
              <div className="w-16 h-16 border-2 border-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://cardhobi.co.in/cdn/shop/files/custom_resized_a0718ec4-28ec-4d1e-ad21-f92b768a4e52.jpg?v=1756458595&width=1346"
                  alt="Thumbnail 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 border border-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://cardhobi.co.in/cdn/shop/files/custom_resized_fc5bb762-c6f5-4514-a2a9-14d3703914d2.jpg?v=1756458595&width=1346"
                  alt="Thumbnail 2"
                  className="w-full h-full object-cover bg-gray-200"
                />
              </div>
              <div className="w-16 h-16 border border-gray-300 rounded-lg overflow-hidden">
                <img
                  src="https://cardhobi.co.in/cdn/shop/files/custom_resized_fc5bb762-c6f5-4514-a2a9-14d3703914d2.jpg?v=1756458595&width=1100"
                  alt="Thumbnail 3"
                  className="w-full h-full object-cover bg-gray-200"
                />
              </div>
            </div>

            {/* Main Product Image */}
            <div className="flex-1 relative">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
                <img
                  src="https://cardhobi.co.in/cdn/shop/files/8_82b2c9e1-f4e3-4552-a9fe-345a1dbd924f.png?v=1756458595&width=1346"
                  alt="Car Dhobi Elite Microfiber Cloth Pack"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Car Dhobi Elite 600 GSM Microfiber Cloth (Pack of 2)
              </h1>

              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-2xl font-bold text-gray-900">
                  Rs. 599
                </span>
                <span className="text-lg text-gray-500 line-through">
                  Rs. 1,099
                </span>
              </div>
              <hr className="border-yellow-400 border-t my-1" />
              <Banner />
              <hr className="border-yellow-400 border-t my-1" />

              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm text-gray-600">
                  or 3 monthly payments of
                </span>
                <span className="font-bold">₹366</span>
                <span className="text-sm text-gray-600">with</span>
                <span className="text-blue-600 font-bold">snapmint</span>
                <span className="text-gray-400 text-xs">ⓘ</span>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                UPI & Cards Accepted, Online approval in 2 minutes
              </p>

              <p className="text-red-600 font-medium mb-6">
                Only 3 item(s) left in stock!
              </p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={decrementQuantity}
                      className="p-2 hover:bg-gray-50"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={incrementQuantity}
                      className="p-2 hover:bg-gray-50"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-white border-2 border-gray-300 text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Add to cart
                </button>

                <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors relative">
                  <div className="absolute top-0 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded-b-md">
                    20% off on Prepaid orders
                  </div>
                  Buy It Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center space-x-8 space-y-4 text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-8 border border-gray-300 rounded flex items-center justify-center text-xs">
              COD
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center text-xs">
              EASY
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center text-xs">
              FREE
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center text-xs">
              100% SECURE
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ProductPage;
