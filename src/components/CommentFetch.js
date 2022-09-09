import React, { useState } from 'react'
import './CommentFetch.css'

const apiComment = "http://localhost:9292/create_comments"


function CommentFetch({ comento, deleteComment }) {
    const { name, reply } = comento;
    const [favourite, seFavourite] = useState(false);

    function handleFavourite() {
        seFavourite(!favourite);
    }
    function handleDelete(e) {
        e.preventDefault();
        fetch(`${apiComment}/${comento.id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(() => {
                deleteComment(comento);
            });        
     }



  return (
      <div className='Comment_Section'>
          <h3>{name}</h3>
          <p>{reply}</p>         
          <button className='Crud_Btns' onClick={ handleDelete }>Delete</button>
          <button className='Crud_Btns' onClick={ handleFavourite }>{ " " } { favourite ? "Not favourite" : "favourite" }</button>
          <button className='Crud_Btns'>Edit</button>
          <br></br>
    </div>
  )
}

export default CommentFetch