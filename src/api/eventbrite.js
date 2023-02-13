import axios from "axios";

export const eventbrite = axios.create({
  baseURL: "https://www.eventbriteapi.com/v3",
  timeout: 30000,
});
