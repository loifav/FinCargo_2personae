import apiClient from "./apiClient";

type AuthorizeParams = {
  username: string;
  password: string;
};

export const authorize = ({ username, password }: AuthorizeParams) => {
  const bodyFormData = new FormData();
  bodyFormData.append("grant_type", "password");
  bodyFormData.append("username", username);
  bodyFormData.append("password", password);

  const options = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  return apiClient.post("/oauth/token", bodyFormData, options);
};
