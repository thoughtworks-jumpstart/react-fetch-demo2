import axios from "axios"

export function getUnsplashAxios(searchTerm){
  const API_KEY = process.env.REACT_APP_API_KEY 
  console.log(API_KEY)
  axios.get("https://api.unsplash.com/search/photos", {
    params: {query: searchTerm},
    headers: {
      Authorization: `Client-ID ${API_KEY}`
    }
  }).then((response) => {
    console.log(response.data.results)
  })
} 