import React, { useState, useEffect } from 'react';
import Auth from '../../utils/auth';

import Milestone from '../Milestone';
import MilestoneForm from '../MilestoneForm';

const MilestoneList = ({ milestones, goalId }) => {

    return (
        <div className="content-wrapper">
            <div className="primary-heading-bar">
                <h4 className="inline-heading">Milestones</h4>
                {/* <button 
                    className="btn btn-add float-right"
                >+ Add Milestone</button> */}
            </div>
            <MilestoneForm goalId={goalId} />
            {milestones && milestones.length ? 
                milestones.map(milestone => (
                    <Milestone goalId={goalId} milestone={milestone} key={milestone._id} />
                ))
                
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