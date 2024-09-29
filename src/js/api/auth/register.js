import { authFetch } from "../../utilities/authFetch";
import { API_AUTH_REGISTER } from "../constants";

export async function register(profile) {
  const response = await authFetch(API_AUTH_REGISTER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  });

  const result = await response.json()
  return result
}


