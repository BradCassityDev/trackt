import React from 'react';
import Auth from '../../utils/auth';
import image from '../../images/placeholder-profile-pic.png';

import CommentList from '../CommentList';

const GoalPost = ({ goal }) => {
    return (
        <div className="card goal-post-card shadow-sm">
            <div className="card-header">
                    <div className="post-header">
                        <div className="profile-img-left">
                            <img src={goal.profilePhoto} alt="profile pic" className="rounded-circle profile-image-sm"/>
                        </div>
                        <span className="username">{goal.username}</span> <br />
                        <span className="item-timestamp">{goal.createdAt}</span>
                    </div>
            </div>
            <div className="card-body">
                <h4>{goal.goalTitle}</h4>
                <p>Category: {goal.goalCategory}</p>
                <p>Status: {goal.goalStatus}</p>
                <p>start Date: {goal.startDate} End Date: {goal.dueDate}</p>
                Description: 
                <p>{goal.goalDescription}</p>

                <button class="btn btn-link" type="button" data-toggle="collapse" data-target={"#" + goal._id + "_comments"} aria-expanded="false">
                    View {goal.comments.length} Comments
                </button>
                <div class="collapse" id={goal._id + "_comments"}>
                    <CommentList comments={goal.comments} />
                </div>
            </div>
        </div>
    );
};

export default GoalPost;