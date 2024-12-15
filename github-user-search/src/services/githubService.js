import axios from "axios";

const API_URL = "https://api.github.com/search/users?q";

export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = `${username ? `+${username}` : ""}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    const response = await axios.get(`${API_URL}?q=${query}`);
    return response.data.items;
  } catch (error) {
    throw new Error("No users found or there was an error with the request");
  }
};
