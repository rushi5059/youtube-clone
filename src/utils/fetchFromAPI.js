import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": "d5d75aa575msh41f9b7cea163056p16ac0djsn11ad8807264c",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

// console.log("API Key:", process.env.REACT_APP_RAPID_API_KEY);

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
