# React Fetch Demo 2

This repo contains a starter project for a code along to demonstrate how to search for images with the Unsplash API and rendering them with react

## Learning Objectives
- To learn how to use fetch and axios to get data from an external API
- How to read API documentation 
- How to store an API key and access the key in React 
- How to pass the key to fetch and axios
- How to extract fetching code to a service
- How to test react components which call an external API by mocking

## Lab Instructions

Fork this repository to your github account and clone it to your computer

The `master` branch contains the final solution for your reference after the lab.

You should checkout to the `lab` branch do an `npm install` before starting this lab

### Get the API key for Unsplash
1. Register at unsplash https://unsplash.com/developers for a free API key
0. Browse the documentation and look for the
  - base url
  - The unsplash api that allows us to search for photos
  - Instructions on how to use the API key
0. Create a file named `.env.local` in the root of your project
0. Save the API key inside as 
```
REACT_APP_API_KEY=placeYourSecretKeyHere
```
0. You can access the API Key with `process.env.REACT_APP_API_KEY` in App.js

### Use Fetch API get data from Unsplash API
1. Add a `componentDidMount()` lifecycle method to App Component, write your fetch logic in this lifecycle hook
0. Research the syntax for the `fetch` API. 
0. Investigate how to pass in the API key through the query string
0. Investigate how to pass the API key through the Authorization header
0. Fetch data using `fetch` from the unsplash API based on a search term

### Use Axios to get data from Unsplash API
1. Modify the code in `componentDidMount()` to use axios 
0. Research the syntax for the `axios` API. 
0. Investigate how to pass in the API key through the query string
0. Investigate how to pass the API key through the Authorization header
0. Fetch data using `axios` from the unsplash API based on a search term

### Extract axios code to a service
1. Create a `services` folder in `src` folder
0. Create a file `unsplash.js`  in the services folder, write your code here.
0. Investigate how to use `axios.create` to create a preconfigured instance of axios that already contains the 
  - baseURL
  - Authorization header with the API key
0. Create a new function in `unsplash.js` called `searchPhotosAxios()` and use the preconfigured instance to get data from unsplash
0. export the function and use it in App.js `componentDidMount()`     

### Demo: Testing a component which has async fetch
1. Together we will  an asynchronous test to mock fetch or axios when testing your component 
0. Create a file App.test.js and write an async test that uses `jest.mock()` and `wait()` from react-testing-library