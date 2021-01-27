import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { ADD_GOAL, UPDATE_GOAL } from '../../utils/mutations';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const mongoDate = date => {
  const year = date.getFullYear()
  let month = date.getMonth()+1
  let day = date.getDate()+2
 
  if (month < 10) month = "0"+ month
  if (day < 10) day = "0"+ day
 
  return year + "-" + month + "-" + day
 }
 
const GoalForm = ({ goal }) => {
    let { id: userParam } = useParams();
    const [formState, setFormState] = useState({});

    if (userParam === "new"){
       setFormState ({ goalTitle: '', goalDescription: '', goalCategory: '', goalStatus: '', startDate: new Date(), dueDate: new Date()});
    }
    else {
      setFormState ({ goalTitle: goal.goalTitle});
    }
    

  
    const [addGoal, { error }] = useMutation(ADD_GOAL);
  
    // update state based on form input changes
    const handleChange = event => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value
      });
    };
  
    // submit form
    const handleFormSubmit = async event => {
      event.preventDefault();
  
      try {
        formState.startDate= mongoDate(formState.startDate)
        formState.dueDate= mongoDate(formState.dueDate)

        const { data } = await addGoal({
          variables: { ...formState }
        });
        window.location.replace ("/")
      } catch (e) {
        console.error(e);
      }

    };
    

    return (
        <div className="content-wrapper">
            <form onSubmit={handleFormSubmit} >
                
                <label>Title:</label>
                <input
                    type="text"
                    placeholder="Goal title..."
                    name="goalTitle"
                    value={formState.goalTitle}
                    onChange={handleChange}
                    className="form-control"
                ></input>

                <label>Category:</label>
                <select
                    type="text"
                    placeholder="Category..."
                    name="goalCategory"
                    value={formState.goalCategory}
                    onChange={handleChange}
                    className="form-control"
                >
                    <option>Select One</option>
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
                    name="goalStatus"
                    className="form-control"
                    value={formState.goalStatus}
                    onChange={handleChange}
    
                >
                    <option>Select One</option>
                    <option>Planned</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Failed</option>
                </select>
                
                <label>Start Date:</label>
                <br></br>
                <DatePicker dateFormat="yyyy-MM-dd" selected={formState.startDate} onChange={date => setFormState({...formState, startDate: date})}/>
                {/* <input
                    type="text"
                    placeholder="Start Date..."
                    value={formState.startDate}
                    onChange={handleChange}
                    className="form-control"
                ></input> */}
                <br></br>

                <label>End Date:</label>
                <br></br>
                <DatePicker dateFormat="yyyy/MM/dd" selected={formState.dueDate} onChange={date => setFormState({...formState, dueDate: date})} />
                <br></br>
                {/* <input
                    type="text"
                    placeholder="End Date..."
                    value={formState.dueDate}
                    onChange={handleChange}
                    className="form-control"
                ></input> */}

                <label>Description:</label>
                <textarea
                    type="text"
                    placeholder="Goal Description..."
                    name="goalDescription"
                    value={formState.goalDescription}
                    onChange={handleChange}
                    className="form-control"
                ></textarea>
                <button className="btn btn-default" type='submit'>Save Changes</button>
            
            </form>
        </div>
    );
};

export default GoalForm;