import axios from "axios";

const KEY = "AIzaSyDaOttTMsBSm7WHQvCFrwXwz7wbPUTW9-k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
