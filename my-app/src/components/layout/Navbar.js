import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dar bg-dark mb-5">
           
            <Link to="/" className="navbar-brand">
                <span className="navbar-brand mb-0 h1 mx-auto" style={{color: "white"}}>Lyric Search</span>
            </Link>
            


        </nav>
    )
}

export default Navbar
