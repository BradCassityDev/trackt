import React from 'react';

const CommentPost = ({ comment }) => {
    return (
        <div className="comment-container">
            <div className="row">
                <div className="col-12">
                    <div className="post-header">
                        <span className="username">{comment.username}</span> <br />
                        <span className="item-timestamp">{comment.createdAt}</span>
                    </div>
                    <p>{comment.commentBody}</p> 
                </div>
            </div>
            <hr className="small-hr"></hr>
        </div>
        
    );
};

export default CommentPost;