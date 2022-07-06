import React from "react";
import Comment from "./Comment";

function CommentsCard({ comments }){
  
    return (
        <div>
            <h2>{comments.length} Comments</h2>
            <div>{comments.map(comment => (<Comment comment={comment} key={comment.id} />))}</div>
        </div>
    )
}

export default CommentsCard;