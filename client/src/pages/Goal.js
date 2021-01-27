import React, { useState, useEffect } from 'react';
// import {  } from '../utils/queries';
import Auth from '../utils/auth';

import PostHeader from '../components/PostHeader';
import GoalForm from '../components/GoalForm';
import CommentList from '../components/CommentList';
import MilestoneList from '../components/MilestoneList';

// Temp fake data
import image from '../images/placeholder-profile-pic.png';

const Goal = () => {

    const goal =  {
        _id: "afionsadofnoi",
        username: "Username",
        goalTitle: "Goal 1",
        goalDescription: "This is the description",
        goalStatus: "In Progress",
        goalCategory: "Fitness",
        startDate: "1/21/2021",
        dueDate: "1/31/2021",
        createdAt: "January 1/21/2021 at 9:23 PM",
        profilePhoto: image,
        comments: [
            {
                _id: "asdfdasfsdfdif",
                commentBody: "I think this will be a hard goal to hit, but I know you can do it! Good luck!",
                username: "SupportivePerson",
                createdAt: "January 23rd at 9:20 AM"
            },
            {
                _id: "asdfdasfsdfdjg",
                commentBody: "I'll see you on the shameboard!",
                username: "NotSupportivePerson",
                createdAt: "January 23rd at 10:19 AM"
            }
        ],
        milestones: [
            {
                milestoneTitle: "Milestone 1",
                milestoneStatus: "Completed"
            },
            {
                milestoneTitle: "Milestone 2",
                milestoneStatus: ""
            }
        ]
    };

    return (
        <div className="goal-details-container">
            <div className="card goal-post-card shadow-sm">
                <div className="card-header">
                    <PostHeader goal={goal} />
                </div>
                <div className="card-body">
                    <GoalForm goal={goal} />
                    <MilestoneList milestones={goal.milestones} />
                    <CommentList comments={goal.comments}/>
                </div>
            </div>
        </div>
    );
};

export default Goal;