import axios from "axios";

export const apiJson = axios.create({
  baseURL: "http://localhost:5000/api/hotels",
});
export const apiForm = axios.create({
  baseURL: "http://localhost:5000/api/hotels",
  headers: { "Content-Type": "multipart/form-data" },
});
