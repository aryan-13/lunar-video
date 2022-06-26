import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
	Navbar,
	Sidebar,
	Homepage,
	History,
	Playlist,
	WatchLater,
	LikedVideos,
} from './Components/index.js';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="flex-col sidebar-homepage-container">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/liked" element={<LikedVideos />} />
					<Route path="/watchlater" element={<WatchLater />} />
					<Route path="/playlists" element={<Playlist />} />
					<Route path="/history" element={<History />} />
				</Routes>
				<Sidebar />
			</div>
		</div>
	);
}

export default App;
