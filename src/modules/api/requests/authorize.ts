// import apiClient from "@utils/http";

// type AuthorizeParams = {
//   username: string;
//   password: string;
// };

// export const authorize = ({ username, password }: AuthorizeParams) => {
//   const bodyFormData = new FormData();
//   bodyFormData.append("grant_type", "password");
//   bodyFormData.append("username", username);
//   bodyFormData.append("password", password);

//   const options = {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   };

//   return apiClient.post("/oauth/token", bodyFormData, options);
// };

import httpClient from "@utils/http";
import cookies from "js-cookie";

type AuthorizeParams = {
  email: string;
  password: string;
};

export const authorize = async ({ email, password }: AuthorizeParams) => {
  try {
    const response = await httpClient.post("/api/v1/users/login", {
      email,
      password,
    });

    const { access_token } = response.data;

    // Stocker le token dans les cookies
    cookies.set("access_token", access_token, { expires: 1 }); // Expire après 1 jour

    console.log("Login successful, token stored.");
    return response.data;
  } catch (error) {
    console.error("Authorization failed:", error);
    throw new Error("Invalid credentials");
  }
};
