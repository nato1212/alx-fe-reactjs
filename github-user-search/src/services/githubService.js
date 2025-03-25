import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/users/";
const SEARCH_API_URL = "https://api.github.com/search/users?q=";
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}${username}`, {
      headers: {
        Authorization: `token ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user data:", error);
    return null;
  }
};

export const fetchUsers = async (query) => {
  try {
    const response = await axios.get(`${SEARCH_API_URL}${query}`, {
      headers: {
        Authorization: `token ${API_KEY}`,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    return [];
  }
};
