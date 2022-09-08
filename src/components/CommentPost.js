import React, {useState } from 'react'

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
        const comment = {
            name,
            email,
            reply
        }
    }
    
    fetch("http://localhost:9292/create_comments", {
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
    
  return (
      <form className="CommentBox" onSubmit={ handleCommentSubmit }>
          <input placeholder='Name' value={ name } onChange={ handleName } />
          <input placeholder='Email' value={ email } onChange={ handleEmail } />
          <textarea placeholder='Reply' value={ reply } onChange={ handleReply } />
          <input type= "submit" placeholder="Reply" value="Share your comment" />
    </form>
  )
}

export default CommentPost