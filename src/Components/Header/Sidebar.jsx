import React from 'react';

const sidebarItems = [
	{
		title: 'Home',
		link: '/',
		icon: <i class="fas fa-home"></i>,
		isSelected: true,
	},

	{
		title: 'Playlists',
		link: '/explore',
		icon: <i class="fas fa-photo-video"></i>,
		isSelected: false,
	},
	{
		title: 'Liked',
		link: '/explore',
		icon: <i class="fas fa-thumbs-up"></i>,
		isSelected: false,
	},
	{
		title: 'Watch Later',
		link: '/explore',
		icon: <i class="fas fa-bookmark"></i>,
		isSelected: false,
	},
	{
		title: 'History',
		link: '/explore',
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
						<li
							className={
								!item.isSelected ? 'sidebar-item' : 'sidebar-item is-selected'
							}
							key={item.title}
						>
							<div className="sidebar-item-icon">{item.icon}</div>
							<div>{item.title}</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Sidebar;
