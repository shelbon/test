import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL, // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests (optional)
  headers: { 'Content-Type': 'application/json' }, // Set default headers (optional)
});

export default apiClient;