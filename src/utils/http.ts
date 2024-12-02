// import cookies from "js-cookie";
// import axios from "axios";

// const defaultBaseURL = "https://api.fincargo.com";
// const baseUrl = import.meta.env.VITE_API_BASE_URL || defaultBaseURL;

// const httpClient = axios.create({
//   baseURL: baseUrl,
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${cookies.get("access_token")}`,
//   },
// });

// httpClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       cookies.remove("access_token");
//       window.location.href = "/login";
//     }
//     throw error;
//   }
// );

// export default httpClient;

import cookies from "js-cookie";
import axios from "axios";

const defaultBaseURL = "https://fastapi-app-180162974123.europe-west6.run.app";
const baseUrl = import.meta.env.VITE_API_BASE_URL || defaultBaseURL;

const httpClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepter les requêtes pour ajouter le token
httpClient.interceptors.request.use(
  (config) => {
    const token = cookies.get("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercepter les réponses pour gérer les erreurs
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      cookies.remove("access_token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default httpClient;
