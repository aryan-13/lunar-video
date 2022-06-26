import { useContext, createContext, useReducer } from 'react';

const videoInit = {};
const videoReducer = (state, action) => {};
const videoContext = createContext();

const VideoProvider = ({ children }) => {
	const [videoState, videoDispatch] = useReducer(videoReducer, videoInit);
	return <videoContext.Provider value={{}}>{children}</videoContext.Provider>;
};
const useVideo = () => useContext(videoContext);
export { useVideo, VideoProvider };
