import React, { useState, useEffect } from 'react';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import image from '../../images/placeholder-profile-pic.png';
import { Link } from 'react-router-dom';
import { QUERY_GOALS_TEMP } from '../../utils/queries';
import GoalPost from '../GoalPost';
import GoalFilterMenu from '../GoalFilterMenu';

import filterGoals from '../../utils/filterGoals';

const GoalList = ({ goals, setGoalListState, menuState }) => {
    const [ statusFilterState, setStatusFilterState ] = useState('All Goals');
    const [ categoryFilterState, setCategoryFilterState] = useState('All Categories');
    
    // Query Goals
    const { loading, data } = useQuery(QUERY_GOALS_TEMP);
    
    // useEffect to watch for changes in data
    useEffect(() => {
    }, [data] );

    // Loading text while data is returned
    if (loading) {
        return <div>Loading...</div>;
    }

    let newData = data.goals || {goals: []};

    
    // Only display filtered goals if not on Shame Board
    let filteredGoals = [];
    if (menuState === "Shame Board") {
        // Filter shameboard
        filteredGoals = data.goals.filter(goal => goal.goalStatus == "Failed");
    } else {
        // Get filtered goals array
        filteredGoals = filterGoals(data.goals, statusFilterState, categoryFilterState);
    }
    

    return (
        <div className="content-wrapper">
            <div>
                <h4 className="inline-heading">{menuState}</h4>
                <Link 
                    to="/goal/new"
                    className="btn btn-add float-right"
                >+ Add Goal</Link>
            </div>

            {menuState !== "Shame Board" && 
                <div>
                    <GoalFilterMenu 
                        statusFilterState={statusFilterState} 
                        setStatusFilterState={setStatusFilterState} 
                        categoryFilterState={categoryFilterState} 
                        setCategoryFilterState={setCategoryFilterState}
                    />
                </div>
            }

            {filteredGoals && filteredGoals.length ? 
                filteredGoals.map(goal => (
                    <GoalPost goal={goal} username={goal.username} profilePhoto={goal.profilePhoto} key={goal._id} />
                ))
            : 
                <div className="empty-message">
                    {menuState === "Shame Board" ? 
                        <p>There are no shamed goals.</p>
                    : 
                        <p>There are no posted goals.</p>
                    }
                </div>
            }
        </div>
    );
};

export default GoalList;