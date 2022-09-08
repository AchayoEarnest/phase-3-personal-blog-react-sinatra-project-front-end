import React from 'react'
import CommentFetch from './CommentFetch'

function CommentContainer({commentList, deleteComment}) {
  return (
      <div className="commentContainer">
          { commentList.map(comento => <CommentFetch key={comento.id} comento = {comento} deleteComment={deleteComment} />)}
    </div>
  )
}

export default CommentContainer