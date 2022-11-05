import React from "react";

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>Blog Saga</h1>
            <div className="links">
                <a href='/' style={{fontWeight: 'bold'}}>Home</a>
                <a href='/create' className="new-blog">New Blog</a>
            </div>
        </nav>
    )
}

export default Navbar