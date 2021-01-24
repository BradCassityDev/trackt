import React from 'react';
import Auth from '../../utils/auth';


const GoalForm = ({ goal }) => {

    return (
        <div className="content-wrapper">
            <form>
                <label>Title:</label>
                <input
                    type="text"
                    placeholder="Goal title..."
                    className="form-control"
                ></input>

                <label>Category:</label>
                <select
                    type="text"
                    placeholder="Category..."
                    className="form-control"
                >
                    <option>Financial</option>
                    <option>Nutritional</option>
                    <option>Physical</option>
                    <option>Social</option>
                    <option>Emotional</option>
                    <option>Intellectual</option>
                    <option>Career</option>
                    <option>Travel</option>
                    <option>Parenting</option>
                </select>

                <label>Status:</label>
                <select
                    type="text"
                    placeholder="Goal Status..."
                    className="form-control"
                >
                    <option>Planned</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Failed</option>
                </select>

                <label>Start Date:</label>
                <input
                    type="text"
                    placeholder="Start Date..."
                    className="form-control"
                ></input>

                <label>End Date:</label>
                <input
                    type="text"
                    placeholder="End Date..."
                    className="form-control"
                ></input>

                <label>Description:</label>
                <textarea
                    type="text"
                    placeholder="Goal Description..."
                    className="form-control"
                ></textarea>
                <button className="btn btn-default">Save Changes</button>
            
            </form>
        </div>
    );
};

export default GoalForm;