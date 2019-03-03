import React, { Component } from "react";
import axios from "axios"
import Card from "./components/Card/Card";

class App extends Component {
  state = {
    resultList: []
  };

  async componentDidMount() {
    const searchTerm = "trees"
    const response= await axios.get("https://api.unsplash.com/search/photos", {
      params: {query: searchTerm},
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
      }
    });
    this.setState({resultList: response.data.results})
  }

  render() {
    const { resultList } = this.state;
    return (
      <div className="container">
        {resultList.map(result => (
          <Card imageUrl={result.urls.small} title={result.description} />
        ))}
      </div>
    );
  }
}

export default App;
