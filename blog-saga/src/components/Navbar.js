import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>Blog Saga</h1>
            <div className="links">
                <Link to='/' style={{fontWeight: 'bold'}}>Home</Link>
                <Link to='/create' className="new-blog">New Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar