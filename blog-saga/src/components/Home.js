import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const[blogs, setBlogs] = useState([
        {
            title: 'My new website',
            body: 'Lorem ipsum...',
            author: 'sachin',
            id: 1
        },
        {
            title: 'Welcome!!!',
            body: 'Lorem ipsum...',
            author: 'gaurav',
            id: 2
        },
        {
            title: 'Web DEV simplified',
            body: 'Lorem ipsum...',
            author: 'chandrajeet',
            id: 3
        }
    ])


    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }
    
    useEffect(() => {
        console.log('use Effect ran')
    }, [])

    return (
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>
        </div>
    )
}

export default Home;