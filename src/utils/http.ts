import cookies from "js-cookie";
import axios from "axios";

const defaultBaseURL = "https://api.fincargo.com";
const baseUrl = import.meta.env.VITE_API_BASE_URL || defaultBaseURL;

const httpClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookies.get("access_token")}`,
  },
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      cookies.remove("access_token");
      window.location.href = "/login";
    }
    throw error;
  }
);

export default httpClient;
