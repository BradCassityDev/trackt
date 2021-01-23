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
            {comments.map(comment => (
                <CommentPost comment={comment} />
            ))}
        </div>
    );
};

export default CommentList;