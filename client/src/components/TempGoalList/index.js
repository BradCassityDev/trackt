import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { QUERY_GOALS_TEMP } from '../../utils/queries';
import GoalPost from '../GoalPost';

const GoalList = ({ menuState, setMenuState }) => {

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
                    to="/goal/new"
                    className="btn btn-add float-right"
                >+ Add Goal</Link>
            </div>

            {data && data.goals.map(goal => (
                <GoalPost goal={goal} key={goal._id} />
            ))}
        </div>
    );
};

export default GoalList;