import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <span className="navbar-brand">F.C. Real Madrid Fan Blog</span>
                <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="add" className="nav-link">Add</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link">About</NavLink>
                    </li>
                    <li className="nab-item">
                        <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;

