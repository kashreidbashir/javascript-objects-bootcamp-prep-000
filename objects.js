var playlist = {
  "My Bloody Valentine": "song1",
  "Phil Ochs": "song2",
  "Slowdive": "song3"
};

function updatePlaylist(thePlaylist, artistName, songTitle) {
  return Object.assign({}, thePlaylist, { [artistName]: songTitle});
}

updatePlaylist(playlist, "artist4", "song4");

function removeFromPlaylist(thePlaylist, artistName) {
  delete thePlaylist[artistName];
  return thePlaylist;
}

removeFromPlaylist(playlist, "My Bloody Valentine", "Phil Ochs");
