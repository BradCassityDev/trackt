import React from 'react';
import Auth from '../../utils/auth';
import image from '../../images/placeholder-profile-pic.png';

const GoalPost = ({ goal }) => {
    console.log(goal);
    return (
        <div className="card goal-post-card shadow-sm">
            <div className="card-header">
                <span>Username</span>
                <span>{goal.createdAt}</span>
            </div>
            <div className="card-body">
                <h4>{goal.goalTitle}</h4>
                Category: {goal.goalCategory}
                Status: {goal.goalStatus}
                start Date: {goal.startDate} End Date: {goal.dueDate}
                Description: {goal.goalDescription}
            </div>
        </div>
    );
};

export default GoalPost;