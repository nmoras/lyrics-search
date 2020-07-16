import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dar bg-dark mb-5">
            <span className="navbar-brand mb-0 h1 mx-auto">Lyric Search</span>
            <Link to="/" className="navbar-brand">
                Lyric Search
            </Link>

        </nav>
    )
}

export default Navbar
