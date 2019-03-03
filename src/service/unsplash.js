import axios from "axios"

export async function getUnsplashAxios(searchTerm){
  const API_KEY = process.env.REACT_APP_API_KEY 
  const response= await axios.get("https://api.unsplash.com/search/photos", {
    params: {query: searchTerm},
    headers: {
      Authorization: `Client-ID ${API_KEY}`
    }
  });
  console.log(response.data.results)
} 