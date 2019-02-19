import React from 'react';
import './header.css';
import CheckoutButton from './checkoutButton';
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
	render() {
		return (
			<header className="text-center">
				<Link to="/" className="title">🏪 Kwik-E-Mart</Link>
				<CheckoutButton />
			</header>
		);
	}
}
