import axios from "axios";

const GITHUB_API_URL = "https://github.com/nato1212/";
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}${username}`, {
      headers: {
        Authorization: `token ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
};
