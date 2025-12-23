import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_URL}/api/hotels`;

export const apiJson = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const apiForm = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});
