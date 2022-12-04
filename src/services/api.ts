import axios from "axios";

const key = process.env.YOUTUBE_API_KEY;

export const api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 4,
    key,
  },
  headers: {},
});
