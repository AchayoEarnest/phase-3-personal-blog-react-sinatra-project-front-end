import React, { useState } from 'react'

const apiComment = "http://localhost:9292/create_comments"


function CommentFetch({ comento, deleteComment }) {
    const { name, email, reply } = comento;
    const [read, setRead] = useState(false);
    const [favourite, seFavourite] = useState(false);

    function handleRead() {
        setRead(!read);
    }
    function handleFavourite() {
        seFavourite(!favourite);
    }
    function handleDelete(e) {
        e.preventDefault();
        fetch(`${apiComment}/${comento.id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((comento) => {
                deleteComment(comento);
            });        
     }



  return (
      <div>
          <h3>Name: {name}</h3>
          <h3>Email: {email}</h3>
          <p>Comment: { reply }</p>
          <button onClick={ handleRead }>Mark as { read ? "Unread" : "Read" }</button>
          
          <br></br>
          <button onClick={ handleDelete }>Delete</button>
          <button onClick={ handleFavourite }>{ " " } Mark as { favourite ? "Not favourite" : "My favourite" }</button>

    </div>
  )
}

export default CommentFetch