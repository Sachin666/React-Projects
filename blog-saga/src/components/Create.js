const Create = () => {
    return(
        <div className="create">
            <h2>Create a new Blog</h2>
            <form>
                <label>Blog Title:</label>
                <input type='text' required />
                <label>Blog Body:</label>
                <textarea required></textarea>
                <label>Blog Author: </label>
                <select>
                    <option value='sachin'>sachin</option>
                    <option value='gaurav'>gaurav</option>
                    <option value='chandrajeet'>chandrajeet</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default Create;