import React, { useState, useEffect } from 'react';
// import {  } from '../utils/queries';
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import PostHeader from '../components/PostHeader';
import GoalForm from '../components/GoalForm';
import CommentList from '../components/CommentList';
import MilestoneList from '../components/MilestoneList';
import { QUERY_GOAL } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/react-hooks';
// Temp fake data
import image from '../images/placeholder-profile-pic.png';
import Milestone from '../components/Milestone';

const Goal = ({ profilePhoto }) => {
    let { id: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_GOAL, {
        variables: { id: userParam }
    });

    const [milestonesList, setMilestonesList] = useState();
    const [listComponentState, setListComponentState] = useState();
    
    useEffect(() => {
        if(data.goal) {
            console.log(data);
            setMilestonesList(data.goal.milestones);
        }
        
    }, [data]);

    if (loading) {
        return <div>Loading...</div>;
    }
    console.log(data);

    return (
        <div className="goal-details-container">
            <div className="card goal-post-card shadow-sm">
                <div className="card-header">
                    {userParam === "new" ? (<h2>Create New Goal</h2>) : <PostHeader username={data.goal.username} profilePhoto={profilePhoto} createdAt={data.goal.createdAt} />}
                </div>
                <div className="card-body">
                    <GoalForm />
                    {userParam !== "new" && data.goal ? 
                            <>
                                <MilestoneList listComponentState={listComponentState} milestonesList={milestonesList} setMilestonesList={setMilestonesList} setListComponentState={setListComponentState} goalId={data.goal._id} milestones={data.goal.milestones} />
                                <CommentList goalId={data.goal._id} comments={data.goal.comments}/>
                            </>
                        :
                            <></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Goal;