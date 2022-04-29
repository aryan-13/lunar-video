import './App.css';
import { Navbar, Sidebar, Homepage } from './Components/index.js';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="flex-col sidebar-homepage-container">
				<Homepage />
				<Sidebar />
			</div>
		</div>
	);
}

export default App;
