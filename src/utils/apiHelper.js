const API_BASE_URL = process.env.API_BASE_URL || "https://staging.fastor.ai";

export const API = {
  REGISTER: `${API_BASE_URL}/v1/pwa/user/register`,
  LOGIN: `${API_BASE_URL}/v1/pwa/user/login`,
  FETCH_RESTAURANT: (query) => `${API_BASE_URL}/v1/m/restaurant${query}`,
};
