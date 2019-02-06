import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    axios
      .get("https://bizarrofriend.herokuapp.com/api/albums")
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    // log the current values of state
    console.log(this.state);

    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
