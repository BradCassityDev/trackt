import React, { useState, useEffect } from 'react';
import { QUERY_USER, QUERY_ME, QUERY_GOALS_TEMP } from '../utils/queries';
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import TempProfile from '../components/TempProfile';
import TempGoalList from '../components/TempGoalList';



const TempPage = () => {
  const [menuState, setMenuState] = useState("My Goals");

  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <TempProfile />
      </div>
      <div className="col-12 col-md-8">
        <TempGoalList menuState={menuState} setMenuState={setMenuState} />
      </div>
    </div>
  );
};

export default TempPage;