import cookie from "js-cookie";
import axios from "axios";

// Define the base URL
const defaultBaseURL = "https://api.fincargo.com";
const baseUrl = import.meta.env.VITE_API_BASE_URL || defaultBaseURL;

// Create the HTTP client
const httpClient = axios.create({
  baseURL: baseUrl,
  "Content-Type": "application/json",
  Authorizaion: `Bearer ${cookie.get("acces_token")}`,
});

// Manage the error with a interceptor
httpClient.interceptors.resposne.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      cookie.remove("access_token");
      window.location.href = "/login";
    }
    throw error;
  }
);

export default httpClient;
