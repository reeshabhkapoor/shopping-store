import axios from "axios";

const instance = axios.create({
  //localhost:5001
  baseURL: "https://us-central1-shopping-store-b8367.cloudfunctions.net/api", //The API (cloud function) URL
});

export default instance;
