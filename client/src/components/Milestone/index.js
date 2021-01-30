import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_MILESTONE } from '../../utils/mutations';

const Milestone = ({ goalId, milestone }) => {

    // Set complete state
    const [completeState, setCompleteState] = useState();
    const [deleteMS] = useMutation(DELETE_MILESTONE);

    // Handle milestone delete
    const deleteMilestone = async event => {
        event.preventDefault();
        try {
            console.log('Delete button clicked');
            const {data} = await deleteMS({
                variables: {
                    goalId: goalId,
                    _id: milestone._id
                }
            });
            // Confirm does not work
            //const confirmDelete = confirm("Are you sure you'd like to delete this milestone?");
            console.log(data.deleteMilestone.milestones);
            setCompleteState("deleted");
            let confirmDelete = true;
            if(confirmDelete) {
                console.log('deleted');
            }
            window.location.replace(`/goal/${goalId}`)
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <div className={"milestone-row " + completeState}>
            <form className="milestone-form">
                <div className="milestone-form-fields">
                    <input className="form-check-input" type="checkbox" id="markcomplete" value="option1"></input>
                    <label className="form-check-label" for="markcomplete">Mark Complete</label>
                    <span className="milestone-title">{milestone.title}</span>
                </div>
            </form>
            <button 
                className="btn btn-link delete-milestone-btn"
                onClick={deleteMilestone}
            >Delete</button>
            
            
            <hr></hr>
        </div>
    );
};

export default Milestone;