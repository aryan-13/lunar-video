import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<nav className="home-nav">
			<div className="navigation-box">
				<Link to="/">
					<div className="logo-box">
						<span className="logo-primary">Lunar</span>{' '}
						<span className="color-primary logo-secondary">Video</span>
					</div>
				</Link>

				<div className="menu-box">
					{/* <ul className="menu-list no-bullets ">
						<li className="menu-item bold-1">
							<Link to="/"> Explore</Link>
						</li>
						<li className="menu-item bold-1">
							<Link to="/products"> Playlists</Link>
						</li>
					</ul> */}
				</div>
				<div className="nav-search">
					<div className="input-box">
						<i className="fa fa-search input__box-icon"></i>
						<input
							type="text"
							className="basic-input "
							placeholder="Input with an icon"
						/>
					</div>
				</div>
				<div className="nav-list">
					<ul className="no-bullets nav-ul">
						<li className="nav-child">
							<Link to="/login" className="btn btn-tertiary-icon">
								{' '}
								<i className="fas fa-user"></i>
							</Link>
						</li>
					</ul>
				</div>
				<div className="nav-search nav-search-mobile">
					<div className="input-box">
						<i className="fa fa-search input__box-icon"></i>
						<input
							type="text"
							className="basic-input "
							placeholder="Input with an icon"
						/>
					</div>
				</div>
				<div className="nav-ham">
					<i className="fa fa-user"></i>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
