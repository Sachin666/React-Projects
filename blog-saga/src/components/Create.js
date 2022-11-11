import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        const blog = {title, body, author}
        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false)
            navigate('/')
        })

    }

    return(
        <div className="create">
            <h2>Create a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type='text' 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea 
                required 
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author: </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value='' selected disabled>author</option>
                    <option value='sachin'>sachin</option>
                    <option value='gaurav'>gaurav</option>
                    <option value='chandrajeet'>chandrajeet</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    )
}

export default Create;