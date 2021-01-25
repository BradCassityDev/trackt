import React from 'react';
import Auth from '../../utils/auth';

import CommentPost from '../CommentPost';
import CommentForm from '../CommentForm';

const CommentList = ({ comments, goalId, username, profilePhoto }) => {


    return (
        <div className="content-wrapper">
            <hr></hr>
            <h4>Comments</h4>
            <CommentForm goalId={goalId} />
            {comments.length ? 
                comments.map(comment => (
                    <CommentPost comment={comment} key={comment._id} />
                ))
            : 
                 <div className="empty-message">
                     <p>No comments posted. Be the first to leave a comment.</p>
                </div>
            }
            
        </div>
    );
};

export default CommentList;