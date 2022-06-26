import { useContext, createContext, useReducer } from 'react';

const videoInit = {
	playlists: [],
	liked: [],
	watchlater: [],
	history: [],
};
const videoReducer = (state, action) => {};
const videoContext = createContext();

const VideoProvider = ({ children }) => {
	const [videoState, videoDispatch] = useReducer(videoReducer, videoInit);
	return (
		<videoContext.Provider value={{ videoState, videoDispatch }}>
			{children}
		</videoContext.Provider>
	);
};
const useVideo = () => useContext(videoContext);
export { useVideo, VideoProvider };
