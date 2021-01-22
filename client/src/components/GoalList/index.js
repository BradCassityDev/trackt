import React from 'react';
import Auth from '../../utils/auth';
import image from '../../images/placeholder-profile-pic.png';

import GoalPost from '../GoalPost';

const GoalList = () => {

    const fakeGoalList = [
        {
            goalTitle: "Goal 1",
            goalDescription: "This is the description",
            goalStatus: "In Progress",
            goalCategory: "Fitness",
            startDate: "1/21/2021",
            dueDate: "1/31/2021",
            milestones: [
                {
                    milestoneTitle: "Milestone 1",
                    milestoneStatus: "Completed"
                },
                {
                    milestoneTitle: "Milestone 2",
                    milestoneStatus: "Incomplete"
                }
            ]
        },
        {
            goalTitle: "Goal 2",
            goalDescription: "This is the description",
            goalStatus: "In Progress",
            goalCategory: "Fitness",
            startDate: "1/21/2021",
            dueDate: "1/31/2021",
            milestones: [
                {
                    milestoneTitle: "Milestone 1",
                    milestoneStatus: "Completed"
                },
                {
                    milestoneTitle: "Milestone 2",
                    milestoneStatus: "Incomplete"
                }
            ]
        }
    ];

    return (
        <div className="content-wrapper">
            <h4>Title goes here...</h4>
            {fakeGoalList.map(goal => (
                <GoalPost goal={goal} />
            ))}
        </div>
    );
};

export default GoalList;