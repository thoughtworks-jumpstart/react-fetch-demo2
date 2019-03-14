import axios from "axios";

const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
  }
});

export const searchPhotosAxios = async (searchTerm) => {
  const response = await unsplash.get(`/search/photos?query=${searchTerm}`);  
  return response.data;
}

export const searchPhotosFetch = async (searchTerm) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${searchTerm}`,
    {
      headers: { 
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
      }
    }
  );

  const data = await response.json()
  return data
} 
