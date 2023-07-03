import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.beta.unycos.com/u/courses/spotlights",
  headers: {
    "content-type": "application/json",
    "x-mejor-key": "unycos",
  },
});
