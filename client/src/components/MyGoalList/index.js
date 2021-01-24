import React, { useEffect } from 'react';
import Auth from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/react-hooks';
import image from '../../images/placeholder-profile-pic.png';
import { Link } from 'react-router-dom';
import { QUERY_GOALS_TEMP } from '../../utils/queries';
import GoalPost from '../GoalPost';

const MyGoalList = ({ user }) => {
    const { goals, username, profilePhoto } = user;


    console.log("My Goals: ", goals);
    return (
        <div className="content-wrapper">
            <div>
                <h4 className="inline-heading">{user.username} Goals</h4>
                {Auth.getProfile().data.username === user.username && 
                <Link 
                    to="/goal/new"
                    className="btn btn-add float-right"
                >+ Add Goal</Link>}
            </div>

            {goals && goals.map(goal => (
                <GoalPost goal={goal} username={username} profilePhoto={profilePhoto}  key={goal._id}/>
            ))}
        </div>
    );
};

export default MyGoalList;