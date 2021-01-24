import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
// import { ADD_COMMENT } from '../../utils/mutations';
import Auth from '../../utils/auth';

const CommentForm = () => {

    // Comment text state
    const [commentText, setCommentText] = useState();

    // Character count state
    const [commentCharCount, setCommentCharCount] = useState(0);

    //const [addComment, { error }] = useMutation(ADD_COMMENT);

    // Update character count
    const handleFormChange = (event) => {
        if(event.target.value.length <= 250) {
            setCommentText(event.target.value);
            setCommentCharCount(event.target.value.length);
        }
    };

    const handleAddComment = async event => {
        event.preventDefault();

        // try {
        //     await addComment({
        //         variables: { commentText }
        //     });

        //     setCommentText('');
        //     setCommentCharCount(0);
        // } catch (err) {
        //     console.log(err);
        // }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleAddComment}>
                <label>Add a Comment {true && "- " + commentCharCount + "/250"}</label>
                <textarea
                    placeholder="Write a comment..."
                    className="form-control"
                    value={commentText}
                    onChange={handleFormChange}
                ></textarea>
                <button className="btn btn-default">Post Comment</button>
            </form>
        </div>
    );
};

export default CommentForm;