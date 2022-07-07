import axios from "axios";
import { LOGIN_USER } from "./types";

export async function loginUser(payload) {
  const request = await axios
    .post("http://localhost:8080/api/users/auth/login", payload)
    .then((res) => res.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}
