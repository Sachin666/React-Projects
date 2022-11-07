const BlogList = ({blogs, title}) => {


    const blogging = blogs.map(blog => (
        <div>
        <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
        </div>
        </div>
    ))

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogging}
        </div>
    )
}

export default BlogList