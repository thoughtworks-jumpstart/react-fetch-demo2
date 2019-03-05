import axios from "axios";

const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
  }
});

export const searchPhotos = async (searchTerm) => {
  const response = await unsplash.get(`/search/photos?query=${searchTerm}`);  
  return response.data;
}

export default searchPhotos