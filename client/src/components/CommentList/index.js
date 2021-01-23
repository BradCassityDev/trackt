import React from 'react';
import Auth from '../../utils/auth';

import CommentPost from '../CommentPost';
import CommentForm from '../CommentForm';

const CommentList = ({ comments }) => {


    return (
        <div className="content-wrapper">
            <hr></hr>
            <h4>Comments</h4>
            <CommentForm />
            {comments.length ? 
                comments.map(comment => (
                    <CommentPost comment={comment} key={comment._id} />
                ))
             : (
                <p>Be the first to leave a comment.</p>
            )}
            
        </div>
    );
};

export default CommentList;