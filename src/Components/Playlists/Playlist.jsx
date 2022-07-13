import React from 'react';
import './Playlist.css';
import PlaylistTile from './PlaylistTile';
function Playlist() {
	return (
		<div className="flex-row">
			<PlaylistTile />
			<PlaylistTile />
			<PlaylistTile />
			<PlaylistTile />
		</div>
	);
}

export default Playlist;
