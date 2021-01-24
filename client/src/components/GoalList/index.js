import React, { useState, useEffect } from 'react';
import Auth from '../../utils/auth';
import { useQuery, useMutation } from '@apollo/react-hooks';
import image from '../../images/placeholder-profile-pic.png';
import { Link } from 'react-router-dom';
import { QUERY_GOALS } from '../../utils/queries';
import GoalPost from '../GoalPost';

const GoalList = ({ goals, title, username, setGoalListState, menuState }) => {

    // let queryCall;
    // if(menuState === "My Goals") {
    //     setGoalListState(goals);
    // } else {
    //     queryCall = QUERY_GOALS_TEMP;
    // }

    const [everGoal, setEverGoal] = useState();
    
    // Query Goals
    const { loading, goalData } = useQuery(QUERY_GOALS);
    
    
    useEffect(() => {
        if (!loading) {
            setEverGoal(goalData);
        }
    }, [goalData] );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="content-wrapper">
            <div>
                <h4 className="inline-heading">{title}</h4>
                <Link 
                    to="/goal/test"
                    className="btn btn-add float-right"
                >+ Add Goal</Link>
            </div>

            {everGoal && everGoal.map(goal => (
                <GoalPost goal={goal} key={goal._id} />
            ))}
        </div>
    );
};

export default GoalList;