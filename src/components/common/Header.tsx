import React from 'react';

export const Header: React.VFC = () => {
    return (
        <header>
            <img width="80px" src='/logo_transparent.png'/>
            <nav className="header-nav">
                <ul className="nav-ul-list">
                    <li><a className="nav-link-style">Top</a></li>
                    <li><a className="nav-link-style">Search</a></li>
                </ul>
            </nav>
        </header>
    )
}
