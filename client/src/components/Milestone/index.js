import React from 'react';
import Auth from '../../utils/auth';

const Milestone = ({ milestone }) => {

    return (
        <div className="milestone-row completed">
            <form>
                <div>
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                    <label className="form-check-label" for="inlineCheckbox1">Mark Complete</label>
                </div>

            </form>
            {milestone.milestoneTitle}
            <button className="btn btn-outline-danger float-right">Delete</button>
            <hr></hr>
        </div>
    );
};

export default Milestone;