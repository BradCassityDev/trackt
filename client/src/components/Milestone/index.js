import React, { useState } from 'react';
import Auth from '../../utils/auth';

const Milestone = ({ milestone }) => {

    // Set complete state
    const [completeState, setCompleteState] = useState();

    // Handle milestone delete
    const deleteMilestone = async event => {
        event.preventDefault();

        // Confirm does not work
        //const confirmDelete = confirm("Are you sure you'd like to delete this milestone?");

        let confirmDelete = true;
        if(confirmDelete) {
            console.log('deleted');
        }

    };

    return (
        <div className={"milestone-row " + completeState}>
            <form className="milestone-form">
                <div className="milestone-form-fields">
                    <input className="form-check-input" type="checkbox" id="markcomplete" value="option1"></input>
                    <label className="form-check-label" for="markcomplete">Mark Complete</label>
                    <span className="milestone-title">{milestone.milestoneTitle}</span>
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