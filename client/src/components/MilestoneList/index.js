import React, { useState, useEffect } from 'react';
import Auth from '../../utils/auth';

import Milestone from '../Milestone';
import MilestoneForm from '../MilestoneForm';

const MilestoneList = ({ listComponentState, setListComponentState, milestonesList, goalId, setMilestonesList}) => {

    // const [milestonesList, setMilestonesList] = useState(milestones);
    // const [listComponentState, setListComponentState] = useState();
    useEffect(() => {
        setListComponentState(milestonesList.map(milestone => (
            <Milestone goalId={goalId} milestone={milestone} setMilestonesList={setMilestonesList} key={milestone._id} />
        )));
    }, [milestonesList]);

    return (
        <div className="content-wrapper">
            <div className="primary-heading-bar">
                <h4 className="inline-heading">Milestones</h4>
                {/* <button 
                    className="btn btn-add float-right"
                >+ Add Milestone</button> */}
            </div>
            <MilestoneForm goalId={goalId} />
            {milestonesList && milestonesList.length ? 
                // milestones.map(milestone => (
                //     <Milestone goalId={goalId} milestone={milestone} setMilestonesList={setMilestonesList} key={milestone._id} />
                // ))
                listComponentState
            : 
            (
                <div className="empty-message">
                    <p>No milestones have been set.</p>
                </div>
            )}
        </div>
    );
};

export default MilestoneList;