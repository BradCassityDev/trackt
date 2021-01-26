import React, { useState, useEffect } from 'react';
import Auth from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/react-hooks';
import image from '../../images/placeholder-profile-pic.png';
import { Link } from 'react-router-dom';
import { QUERY_GOALS_TEMP } from '../../utils/queries';
import GoalPost from '../GoalPost';
import GoalFilterMenu from '../GoalFilterMenu';

import filterGoals from '../../utils/filterGoals';


const MyGoalList = ({ user }) => {
    const { goals, username, profilePhoto } = user;
    
    const [ statusFilterState, setStatusFilterState ] = useState('All Goals');
    const [ categoryFilterState, setCategoryFilterState] = useState('All Categories');

    // Get filtered goals array
    let filteredGoals = filterGoals(goals, statusFilterState, categoryFilterState);

    return (
        <div className="content-wrapper">
            <div>
                <h4 className="inline-heading">{Auth.getProfile().data.username === user.username ? "My" : user.username} Goals</h4>
                {Auth.getProfile().data.username === user.username && 
                <Link 
                    to="/goal/new"
                    className="btn btn-add float-right"
                >+ Add Goal</Link>}
            </div>

            <div>
                <GoalFilterMenu 
                    statusFilterState={statusFilterState} 
                    setStatusFilterState={setStatusFilterState} 
                    categoryFilterState={categoryFilterState} 
                    setCategoryFilterState={setCategoryFilterState}
                />
            </div>

            {filteredGoals && filteredGoals.length ? 
                filteredGoals.map(goal => (
                    <GoalPost goal={goal} username={username} profilePhoto={profilePhoto}  key={goal._id}/>
                )) 
            : 
                <div className="empty-message">
                    <p>There are no posted goals for this user.</p>
                </div>
            }
        </div>
    );
};

export default MyGoalList;