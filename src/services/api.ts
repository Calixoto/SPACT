import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 4,
    key: "AIzaSyAog7LHSwVP-AiDA7PxMiCEkAsj5IfyduI",
  },
  headers: {},
});
