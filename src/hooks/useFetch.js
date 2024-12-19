import { useState, useEffect } from "react";
import { fetchRestaurants } from "../api/apiService";

const useFetch = (cityId) => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchRestaurants(cityId);
        setRestaurants(data?.data?.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (cityId) {
        fetchData();
      }
  }, []);

  return { restaurants, loading, error };
};

export default useFetch;
