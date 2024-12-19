import axios from "axios";
import { API } from "../utils/apiHelper";

// Register User
export const registerUser = async (phone, dialCode) => {
  try {
    const response = await axios.post(
      API.REGISTER,
      new URLSearchParams({
        phone,
        dial_code: dialCode,
      })
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.message || "Error registering user"
    );
  }
};

// Login User
export const loginUser = async (phone, otp, dialCode) => {
  try {
    const response = await axios.post(
      API.LOGIN,
      new URLSearchParams({
        phone,
        otp,
        dial_code: dialCode,
      })
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.message || "Error logging in"
    );
  }
};

// Fetch Restaurants
export const fetchRestaurants = async (cityId) => {
  try {
    const url = API.FETCH_RESTAURANT(`?city_id=${cityId}`);
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer your_token`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "Error fetching restaurants"
    );
  }
};
