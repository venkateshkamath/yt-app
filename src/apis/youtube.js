import axios from "axios";

const KEY = "AIzaSyAMUH3hGPHhb2Q2jW72U5FkIgOSYvBEMag";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 50,
    key: KEY,
  },
});
