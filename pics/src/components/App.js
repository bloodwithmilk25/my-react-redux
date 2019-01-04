import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  // state contains list of image objects
  state = { images: [] };

  onSearchSumbit = async term => {
    // ajax request
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    // update state
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSumbit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
