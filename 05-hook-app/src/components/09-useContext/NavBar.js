import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                
                <Link className="navbar-brand" to={'/'}>useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className={`nav-link ${(navData) => navData.isActive && 'active' }`} aria-current="page" to={'/'}>Home</NavLink>
                    <NavLink className={`nav-link ${(navData) => navData.isActive && 'active' }`} to={'/about'}>About</NavLink>
                    <NavLink className={`nav-link ${(navData) => navData.isActive && 'active' }`} to={'/login'}>Login</NavLink>
                </div>
                </div>
            </div>
        </nav>
  );
};
