import { Link } from 'react-router-dom';

const sidebarItems = [
	{
		title: 'Home',
		link: '/',
		icon: <i class="fas fa-home"></i>,
		isSelected: true,
	},

	{
		title: 'Playlists',
		link: '/playlists',
		icon: <i class="fas fa-photo-video"></i>,
		isSelected: false,
	},
	{
		title: 'Liked',
		link: '/liked',
		icon: <i class="fas fa-thumbs-up"></i>,
		isSelected: false,
	},
	{
		title: 'Watch Later',
		link: '/watchlater',
		icon: <i class="fas fa-bookmark"></i>,
		isSelected: false,
	},
	{
		title: 'History',
		link: '/history',
		icon: <i class="fas fa-history"></i>,
		isSelected: false,
	},
];
function Sidebar() {
	return (
		<div className="sidebar-container ">
			<ul className="sidebar-list">
				{sidebarItems.map((item) => {
					return (
						<Link to={item.link}>
							<li
								className={
									!item.isSelected ? 'sidebar-item' : 'sidebar-item is-selected'
								}
								key={item.title}
							>
								<div className="sidebar-item-icon">{item.icon}</div>
								<div>{item.title}</div>
							</li>
						</Link>
					);
				})}
			</ul>
		</div>
	);
}

export default Sidebar;
