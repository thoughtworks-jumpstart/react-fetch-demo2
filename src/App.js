import React, { Component } from "react";
import { getUnsplashAxios } from "./service/unsplash";
import Card from "./components/Card/Card";

class App extends Component {
  state = {
    resultList: []
  };

  componentDidMount() {
    getUnsplashAxios("Cars");
    // this.setState({resultList : getUnsplashAxios("Cars")})
  }

  render() {
    const { resultList } = this.state;
    return (
      <div className="container">
        {resultList.map(result => (
          <Card imageUrl="" title="" />
        ))}
      </div>
    );
  }
}

export default App;
