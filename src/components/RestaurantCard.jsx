import React from "react";
import { Star, MapPin, Clock } from 'lucide-react';

const RestaurantCard = ({ logo, name, address, rating, cuisine, openingHours }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <img src={logo} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-0 right-0 bg-yellow-400 text-white px-2 py-1 rounded-bl-lg flex items-center">
          <Star className="w-4 h-4 mr-1" />
          <span className="font-bold">{rating}</span>
        </div>
      </div>
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-2 flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {address || "No Address Available"}
        </p>
        <p className="text-sm text-gray-600 mb-2">{cuisine}</p>
        <p className="text-sm text-gray-600 flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {openingHours}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;

