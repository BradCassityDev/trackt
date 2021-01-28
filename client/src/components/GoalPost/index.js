import React, {useState} from 'react';
import Auth from '../../utils/auth';
import image from '../../images/placeholder-profile-pic.png';
import failStamp from '../../images/Fail.png';
import CommentList from '../CommentList';
import PostHeader from '../PostHeader';
import Collapse from "react-bootstrap/Collapse";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { UPDATE_GOAL } from '../../utils/mutations';


const GoalPost = ({ goal, username, profilePhoto }) => {
    const [open, setOpen] = useState(false);
    
    const updateGoal = event => {
        // UPDATE GOAL MUTATION GOES HERE
        window.location.replace (`/goal/${goal._id}`)
    }

    console.log(goal.goalStatus);
    // const newStartDate = new Date(goal.startDate).toDateString()
    // const newDueDate = new Date(goal.dueDate).toDateString()
    // console.log(newStartDate)
    // console.log(newDueDate)

    return (
        <div className="card goal-post-card shadow-sm">
            <div className="card-header">
                    <PostHeader username={username} createdAt={goal.createdAt} profilePhoto={profilePhoto ? profilePhoto : image} />
            </div>
            <div className="card-body goal-post-card-body">
                {goal.goalStatus === "Failed" && 
                    <div className="fail-stamp-container">
                        <img src={failStamp} alt="Fail Stamp" className="fail-stamp" />
                    </div>
                }
                {Auth.getProfile().data.username === username ? 
                    <h4 onClick={updateGoal} className="pointer">{goal.goalTitle}</h4>
                :
                    <h4>{goal.goalTitle}</h4>
                }
                
                <p>Category: {goal.goalCategory}</p>
                <p>Status: {goal.goalStatus}</p>
                {/* <p>Start Date: {newStartDate}</p>
                <p>End Date: {newDueDate}</p> */}
                Description: 
                <p>{goal.goalDescription}</p>
               
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="comment-list"
                    aria-expanded={open}
                    variant="outline-primary"
                >
                    {!open ? "View " : "Hide "} {goal.comments.length} Comments
                </Button>
                <Collapse in={open}>
                    <div id="comment-list">
                    <CommentList comments={goal.comments} goalId={goal._id} username={username} profilePhoto={profilePhoto} />
                    </div>
                </Collapse>
            </div>
        </div>
    );
};

export default GoalPost;