import axios from "axios";

const client = axios.create({
  baseURL: `https://movieapp-ffa8.onrender.com/api/`,
});

export default client;
