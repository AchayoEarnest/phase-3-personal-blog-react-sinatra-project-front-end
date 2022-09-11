import React, { useState } from 'react'
import "./CommentPost.css";

function CommentPost({ addComment }) {
    const [name, setName] = useState('')
    const [reply, setReply] = useState('')
    const [email, setEmail] = useState('')

    function handleReply(e) {
        setReply(e.target.value);
    }
    function handleName(e) {
        setName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }
    
    function handleCommentSubmit(e) {
        e.preventDefault();
        setReply(" ")
        setName(" ")
        setEmail(" ")

        const comment = {
            name,
            email,
            reply
        };
        
        fetch("https://cahayo-blog-app.herokuapp.com/create_comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(newComment => {
                addComment(newComment);
            });
    }
    
        return (
            <form className="CommentBox" onSubmit={ handleCommentSubmit }>
                <textarea placeholder='Reply' value={reply} onChange={ handleReply} required />
                <input placeholder='Name' value={ name } onChange={ handleName } required />
                <input placeholder='Email' type='email' value={ email } onChange={handleEmail} required/>                
                <input className='btn' type="submit" placeholder="Reply" value="Comment" />
            </form>
        );
  
}

export default CommentPost;