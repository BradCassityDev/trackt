import React from 'react';
import Auth from '../../utils/auth';
import image from '../../images/placeholder-profile-pic.png';

import GoalPost from '../GoalPost';

const GoalList = ({ goals, title }) => {

    return (
        <div className="content-wrapper">
            <h4>{title}</h4>
            {goals.map(goal => (
                <GoalPost goal={goal} />
            ))}
        </div>
    );
};

export default GoalList;