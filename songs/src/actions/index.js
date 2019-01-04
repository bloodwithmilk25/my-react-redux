// a list of actions on our data

export const selectSong = song => {
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
