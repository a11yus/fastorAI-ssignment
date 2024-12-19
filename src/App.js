import React from "react";
import RestaurantList from "./components/RestaurantList";
import useFetch from "./hooks/useFetch";

const App = () => {
  const cityId = 118;
  const { restaurants, loading, error } = useFetch(cityId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-xl font-bold mb-4">Restaurants</h1>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default App;
