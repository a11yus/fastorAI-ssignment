import React from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Featured Restaurants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.restaurant_id}
            logo={restaurant.logo}
            name={restaurant.restaurant_name}
            address={restaurant.address_complete}
            rating={restaurant.rating || "N/A"}
            cuisine={restaurant.cuisine || "Various"}
            openingHours={restaurant.opening_hours || "Hours not available"}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;

