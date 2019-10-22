import React, { useState } from "react";

const Comments = (props) => {
    const [post, setPost] = useState({
        body: '',
    });
    const changeHandler = event => {
        setPost({ ...post, [event.target.name]: event.target.value });
        console.log(event.target.value);
    };
    const submitForm = event => {
        event.preventDefault();
        // props.addNewPost(post);
        setPost({ body: "" });
    };
    return (
        <form onSubmit={submitForm}>
            {/* <input type="text" />
            <span>😃</span> */}
            <label htmlFor="body"></label>
            <textarea
                name="body"
                id="body"
                placeHolder="Type your post here"
                onChange={changeHandler}
                value={post.body}
            />
            <button type="submit">Post</button>
        </form>
    )
}

export default Comments

//need to put <meta charset="UTF-8"> in HTML head if emoji is used
