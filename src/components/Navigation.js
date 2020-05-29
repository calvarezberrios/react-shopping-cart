import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({cartLength}) => {
	
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cartLength}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
