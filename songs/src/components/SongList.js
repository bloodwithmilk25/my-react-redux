import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
  // now we can use this.props in SongList component
  // this.props === state.songs
};

// connect component with redux data starage, aka getting state
export default connect(
  // fist argument is function that speaks for itself
  mapStateToProps,
  // second argument object that contains action creators
  {
    selectSong: selectSong
  }
)(SongList);
