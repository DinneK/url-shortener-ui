import React, { Component } from "react";
import "./App.css";
import { getUrls, postUrl } from "../../apiCalls";
import UrlContainer from "../UrlContainer/UrlContainer";
import UrlForm from "../UrlForm/UrlForm";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      urls: [],
    };
  }

  componentDidMount() {
    getUrls()
      .then((data) => {
        console.log({ data });
        this.setState({
          urls: data.urls,
        });
      })
      .catch((error) => {
        this.setState({
          error: `Uh oh! That's a ${error}, please try again later!`,
        });
      });
  }

  addUrl = (newUrl) => {
    postUrl(newUrl)
      .then((data) =>
        this.setState({
          urls: [...this.state.urls, newUrl],
        })
      )
      .catch((error) => this.setState({ error: error }));
    console.log(this.state.urls);
  };

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl} />
        </header>
        <UrlContainer urls={this.state.urls} />
      </main>
    );
  }
}

export default App;
