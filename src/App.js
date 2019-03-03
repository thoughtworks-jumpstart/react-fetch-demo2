import React, { Component } from "react";
import unsplash from "./service/unsplash"
import Card from "./components/Card/Card";

class App extends Component {
  state = {
    resultList: []
  };

  async componentDidMount() {
    const searchTerm = "trees"
    const response= await unsplash.get("/search/photos", {
      params: {query: searchTerm}
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
