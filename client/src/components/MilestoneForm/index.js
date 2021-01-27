import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { ADD_MILESTONE } from '../../utils/mutations';
import Auth from '../../utils/auth';

const MilestoneForm = ({ goalId }) => {
// Comment text state
const [title, setTitle] = useState();

// Character count state

const [addMilestone, { error }] = useMutation(ADD_MILESTONE);

// Update character count
const handleFormChange = (event) => {
    if(event.target.value.length <= 250) {
        setTitle(event.target.value);
    }
};

const handleAddMilestone = async event => {
    event.preventDefault();

    try {
        await addMilestone({
            variables: { 
                goalId: goalId,
                username: Auth.getProfile().data.username,
                title: title 
            }
        });

        setTitle('');
    } catch (err) {
        console.log(err);
    }
};
    // const [formState, setFormState] = useState({ title: '' });
    // const [addMilestone, { error }] = useMutation(ADD_MILESTONE);
  
    // // Update character count
    // const handleFormChange = event => {
    //     const { name, value } = event.target;
    
    //     setFormState({
    //       ...formState,
    //       [name]: value
    //     });
    //   };
  
    // const handleAddMilestone = async event => {
    //     event.preventDefault();

    //     try {
    //         const { data } = await addMilestone({
    //             variables: { ...formState }
    //         });
      
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    return (
        <div className="form-container">
            <form onSubmit={handleAddMilestone}>
                <label>Add a Milestone</label>
                <input
                    placeholder="Enter your Milestone..."
                    className="form-control"
                    value={title}
                    onChange={handleFormChange}
                    // name="title"
                ></input>
     
                <button className="btn btn-default">Add Milestone</button>
                                
            </form>
        </div>
    );
};

export default MilestoneForm;