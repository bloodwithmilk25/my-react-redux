import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID f4c257f1b06f1a5902435a2ce5f4cfd4201869a41fd5f7e28ca15073471dc2d7"
  }
});
