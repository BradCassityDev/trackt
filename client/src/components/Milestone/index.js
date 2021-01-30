import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { DELETE_MILESTONE, UPDATE_MILESTONE } from '../../utils/mutations';

const Milestone = ({ goalId, milestone }) => {
    let { id: userParam } = useParams();


    // Set complete state
    const [formState, setFormState] = useState({ _id: `${milestone._id}`, title: `${milestone.title}`, status: `${milestone.status}`});

    const [completeState, setCompleteState] = useState();
    const [deleteMS] = useMutation(DELETE_MILESTONE);
    const [completeMS] = useMutation(UPDATE_MILESTONE);

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


    const completeMilestone = async (value) => {

        setFormState({
          ...formState,
          status: value
        });
  
        
        try {
            const {data} = await completeMS({
                variables: {
                    goalId: goalId,
                    _id: milestone._id, 
                    status: 'complete',
                    title: milestone.title
                }
            });
            // window.location.replace (`/`)
        } catch (e) {
          console.error(e);
        }
    }

    //Handle milestone complete
    // const completeMilestone = async event => {
    //     event.preventDefault();
    //     try {
    //         console.log('Complete button clicked');
    //         const {data} = await completeMS({
    //             variables: {
    //                 goalId: goalId,
    //                 _id: milestone._id, 
    //                 status: milestone.status,
    //                 title: milestone.title
    //             }
    //         });
    //         console.log(data.updateMilestone.milestones);
    //         setCompleteState("completed");
    //         let completed = true;
    //         if(completed) {
    //             console.log('updated');
    //         }
    //         // window.location.replace(`/goal/${goalId}`)
    //     } catch (err) {
    //         console.log(err);
    //     }

    // };
    const mStatus = ['Completed'];

    return (
        <div className={"milestone-row " + completeState}>            
            <form className="milestone-form">
                <div className="milestone-form-fields">
                { userParam !== mStatus.includes(formState.status) ? 
                <>
                    <input className="form-check-input" type="checkbox" id="markcomplete" value="option1"
                    onClick={()=>completeMilestone('Completed')}
                    ></input>
                    <label className="form-check-label" for="markcomplete"></label>
                    <span className="milestone-title">{milestone.title}</span>
                </> : <></>
                }
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