import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Immigration Song", duration: "4:35" },
    { title: "Lazy", duration: "7:16" },
    { title: "Raise Your Horns", duration: "5:15" },
    { title: "Holly Diver", duration: "6:24" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
