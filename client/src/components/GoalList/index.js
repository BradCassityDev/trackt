import React, { useState, useEffect } from 'react';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import image from '../../images/placeholder-profile-pic.png';
import { Link } from 'react-router-dom';
import { QUERY_GOALS_TEMP } from '../../utils/queries';
import GoalPost from '../GoalPost';

const GoalList = ({ goals, setGoalListState, menuState }) => {

    // Query Goals
    const { loading, data } = useQuery(QUERY_GOALS_TEMP);
    
    useEffect(() => {
        
    }, [data] );

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div className="content-wrapper">
            <div>
                <h4 className="inline-heading">{menuState}</h4>
                <Link 
                    to="/goal/test"
                    className="btn btn-add float-right"
                >+ Add Goal</Link>
            </div>

            {data.goals && data.goals.map(goal => (
                <GoalPost goal={goal} key={goal._id} />
            ))}
        </div>
    );
};

export default GoalList;