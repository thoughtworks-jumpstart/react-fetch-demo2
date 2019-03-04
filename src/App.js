import React, { Component } from "react";
import { unsplash } from "./services/unsplash";
import Card from "./components/Card/Card";

class App extends Component {
  state = {
    resultList: []
  };

  async componentDidMount() {
    try {
      const searchTerm = "flowers";
      const response = await unsplash.get(`/search/photos?query=${searchTerm}`);
      const data = response.data;
      this.setState({ resultList: data.results });
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
