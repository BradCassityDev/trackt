import React from 'react';
import Auth from '../../utils/auth';
import image from '../../images/placeholder-profile-pic.png';

import GoalPost from '../GoalPost';

const GoalList = ({ goals, title }) => {

    // Handle add goal click event
    const addGoal = event => {
        event.preventDefault();
    };

    return (
        <div className="content-wrapper">
            <div>
                <h4 className="inline-heading">{title}</h4>
                <button 
                    className="btn btn-add float-right"
                    onClick={addGoal}
                >+ Add Goal</button>
            </div>

            {goals.map(goal => (
                <GoalPost goal={goal} key="goal._id" />
            ))}
        </div>
    );
};

export default GoalList;