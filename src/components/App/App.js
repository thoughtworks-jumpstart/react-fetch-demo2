import React, { Component } from "react";
import { searchPhotos } from "../../services/unsplash";
import Card from "../Card/Card";

class App extends Component {
  state = {
    resultList: []
  };

  async componentDidMount() {
    try {
      const searchTerm = "flowers";
      const response = await searchPhotos(searchTerm)
      const results = response.data.results
      this.setState({ resultList: results });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { resultList } = this.state;
    return (
      <div className="container">
        {resultList.map(result => (
          <Card
            key={result.id}
            imageUrl={result.urls.small}
            title={result.description}
          />
        ))}
      </div>
    );
  }
}

export default App;
