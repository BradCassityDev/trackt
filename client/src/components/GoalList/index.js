import React from 'react';
import Auth from '../../utils/auth';
import image from '../../images/placeholder-profile-pic.png';
import { Link } from 'react-router-dom';

import GoalPost from '../GoalPost';

const GoalList = ({ goals, title }) => {

    return (
        <div className="content-wrapper">
            <div>
                <h4 className="inline-heading">{title}</h4>
                <Link 
                    to="/goal/test"
                    className="btn btn-add float-right"
                >+ Add Goal</Link>
            </div>

            {goals.map(goal => (
                <GoalPost goal={goal} key="goal._id" />
            ))}
        </div>
    );
};

export default GoalList;