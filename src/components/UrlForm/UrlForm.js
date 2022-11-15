import React, { Component } from "react";

class UrlForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      long_url: "",
      // short_url: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitUrl = (event) => {
    event.preventDefault();
    const newUrl = {
      id: Date.now(),
      title: this.state.title,
      long_url: this.state.long_url,
    };
    console.log("Blarg", this.state.long_url);
    this.props.addUrl(newUrl);
    this.clearInputs();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.submitUrl(e);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ title: "", long_url: "" });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Title..."
          name="title"
          value={this.state.title}
          onChange={(e) => this.handleNameChange(e)}
        />

        <input
          type="text"
          placeholder="URL to Shorten..."
          name="long_url"
          value={this.state.long_url}
          onChange={(e) => this.handleNameChange(e)}
        />

        <button onClick={(e) => this.handleSubmit(e)}>Shorten Please!</button>
      </form>
    );
  }
}

export default UrlForm;
