import React, { Component } from "react";
import Card from "./components/Card/Card";

class App extends Component {
  state = {
    resultList: []
  };

  async componentDidMount() {
   //fetch data from unsplash and set to state
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
