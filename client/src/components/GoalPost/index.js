import React from 'react';
import Auth from '../../utils/auth';
import image from '../../images/placeholder-profile-pic.png';

const GoalPost = ({ goal }) => {
    return (
        <div className="card">
            <div className="card-body">
                {goal.title}
            </div>
        </div>
    );
};

export default GoalPost;