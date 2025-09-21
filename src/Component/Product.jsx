import React, { useState } from 'react';
import { Search, User, ShoppingCart, Heart, Share2, Star } from 'lucide-react';
import Banner from "./Banner";

export default function SpitiValleyTShirtPage() {
  const [selectedColor, setSelectedColor] = useState('Black Regular');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E7E1D7' }}>
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="w-[100px]">
              <img src="https://roadstoindia.com/cdn/shop/files/roads_to_india_900_900_black.png?v=1678262497&width=500" alt="" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-black">Home</a>
              <a href="#" className="text-gray-700 hover:text-black">Collection</a>
              <a href="#" className="text-gray-700 hover:text-black">Women</a>
              <a href="#" className="text-gray-700 hover:text-black">Bagnan Store</a>
              <a href="#" className="text-gray-700 hover:text-black">Contact</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-6 h-6 cursor-pointer" />
            <User className="w-6 h-6 cursor-pointer" />
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-screen">
          {/* Product Image */}
          <div className="bg-white rounded-lg p-8 flex justify-center items-center">
            <div className="relative w-full aspect-square flex justify-center items-center">
              <img
                src="https://roadstoindia.com/cdn/shop/files/Black1_jpg_6e9d4fca-0c21-41ae-8c8f-b48fee2cdf2a.jpg?v=1757662373"
                alt="Lost in Spiti Valley T-Shirt"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6 overflow-y-auto max-h-screen pr-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">ROADS TO INDIA</p>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Roads to India® Pure Cotton Regular, Oversized Travel t-shirt for Men - Lost in Spiti Valley - Unisex Round Neck Printed Casual fit Drop Shoulder 180-220 GSM | S - 5XL | Black
              </h1>
            </div>
            <Banner />

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500 line-through">Rs. 899.00</span>
              <span className="text-2xl font-bold text-gray-900">Rs. 499.00</span>
              <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">Sale</span>
            </div>

            <p className="text-sm text-gray-600">
              Tax included. <a href="#" className="underline">Shipping</a> calculated at checkout.
            </p>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">Color</label>
              <div className="flex space-x-3">
                <button
                  onClick={() => setSelectedColor('Black Regular')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedColor === 'Black Regular'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  Black Regular
                </button>
                <button
                  onClick={() => setSelectedColor('Black Oversized')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedColor === 'Black Oversized'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  Black Oversized
                </button>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">Size</label>
              <div className="grid grid-cols-4 gap-2">
                {['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 border rounded text-sm font-medium transition-colors ${selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">Quantity</label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Buy it now
              </button>
            </div>

            {/* Additional Actions */}
            <div className="flex items-center justify-center space-x-6 pt-4">
              <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800">
                <Heart className="w-4 h-4" />
                <span>Add to Wishlist</span>
              </button>
              <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>

            {/* Product Features */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">100% Pure Cotton</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">180-220 GSM Premium Quality</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Unisex Round Neck Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Drop Shoulder Casual Fit</span>
              </div>
            </div>


          </div>
        </div>

        {/* Product Description and Size Guide */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Product Description - 60% (3/5 columns) */}
          <div className="lg:col-span-3 bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Product Description</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Carry the spirit of adventure wherever you go with the Roads to India Travel T-Shirt Collection — a premium range of graphic tees for explorers, wanderers, and dreamers. Inspired by iconic destinations, scenic landscapes, and the joy of the journey, these travel printed t-shirts are perfect for road trips, weekend getaways, and everyday wear that keeps the travel spirit alive.
              </p>
              <p className="mb-4">
                From minimalist map designs and wanderlust quotes to bold illustrations of mountains, beaches, and legendary routes, this collection celebrates the thrill of exploration. Whether you're looking for a travel t-shirt for men, a wanderlust-inspired tee for women, or an oversized unisex travel shirt, these designs fit every traveler's lifestyle.
              </p>
              <p className="mb-4">
                Made from 100% combed cotton for solid colors and a soft cotton blend in heathers, our travel graphic t-shirts offer breathability, durability, and comfort — ideal for long travel days or casual city strolls. Choose between drop-shoulder oversized fits for a relaxed, streetwear vibe or classic regular cuts for a timeless look.
              </p>
            </div>
          </div>

          {/* Size Guide - 40% (2/5 columns) */}
          <div className="lg:col-span-2 bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Size Guide</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Regular Fit (in inches)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Size</th>
                        <th className="text-left py-2">Chest</th>
                        <th className="text-left py-2">Length</th>
                        <th className="text-left py-2">Sleeve</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b"><td className="py-2">S</td><td>38</td><td>26</td><td>7</td></tr>
                      <tr className="border-b"><td className="py-2">M</td><td>40</td><td>27</td><td>7.5</td></tr>
                      <tr className="border-b"><td className="py-2">L</td><td>42</td><td>28</td><td>8</td></tr>
                      <tr className="border-b"><td className="py-2">XL</td><td>44</td><td>29</td><td>8.5</td></tr>
                      <tr><td className="py-2">2XL</td><td>46</td><td>30</td><td>9</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Oversized Fit (in inches)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Size</th>
                        <th className="text-left py-2">Chest</th>
                        <th className="text-left py-2">Length</th>
                        <th className="text-left py-2">Sleeve</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b"><td className="py-2">XL</td><td>46</td><td>29</td><td>9</td></tr>
                      <tr className="border-b"><td className="py-2">2XL</td><td>48</td><td>30</td><td>9.5</td></tr>
                      <tr className="border-b"><td className="py-2">3XL</td><td>50</td><td>31</td><td>10</td></tr>
                      <tr className="border-b"><td className="py-2">4XL</td><td>52</td><td>32</td><td>10</td></tr>
                      <tr><td className="py-2">5XL</td><td>54</td><td>33</td><td>10</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">Note: Final size may vary by ±0.5 inches.</p>
          </div>
        </div>
      </div>

      {/* Chat Widget Placeholder */}
      <div className="fixed bottom-4 right-4 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white cursor-pointer">
        <span className="text-xs">💬</span>
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
          1
        </div>
      </div>
    </div>
  );
}