import React from 'react';
import Auth from '../../utils/auth';

import Milestone from '../Milestone';

const MilestoneList = ({ milestones }) => {

    return (
        <div className="content-wrapper">
            <div class="primary-heading-bar">
                <h4 className="inline-heading">Milestones</h4>
                <button 
                    className="btn btn-add float-right"
                >+ Add Milestone</button>
            </div>

            {milestones.length ? 
                milestones.map(milestone => (
                    <Milestone milestone={milestone} />
                ))
            : 
            (
                <p>No milestones have been set.</p>
            )}
        </div>
    );
};

export default MilestoneList;