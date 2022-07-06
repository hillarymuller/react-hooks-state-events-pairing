import React from "react";

function Comment({ comment }) {
    console.log(comment);
    return (
        <div>
            <h3>{comment.user}</h3>
            <span>{comment.comment}</span>
        </div>
    );
}

export default Comment;