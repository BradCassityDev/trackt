import React, { useState, useEffect } from 'react';
// import {  } from '../utils/queries';
import Auth from '../utils/auth';
import ProfileCard from '../components/ProfileCard';
import FriendList from '../components/FriendList';
import ProfileMenu from '../components/ProfileMenu';
import GoalList from '../components/GoalList';
import PeopleList from '../components/PeopleList';

// Temp fake data
import fakeGoalList from '../fakeGoalList';
import fakeUser from '../fakeUser';
import fakePeopleList from '../fakePeopleList';

const Home = () => {

  // Home menu state
  const [menuState, setMenuState] = useState("Everyone's Goals");

  // Rendered menu component state
  const [componentState, setComponentState] = useState();


  useEffect(() => {
      // Update rendered component
      switch(menuState) {
        case "Everyone's Goals":
          setComponentState(<GoalList goals={fakeGoalList} title={menuState} />)
          break;
        case "My Goals":
          setComponentState(<GoalList goals={fakeUser.goals} title={menuState} />);
          break;
        case "People":
          setComponentState(<PeopleList people={fakePeopleList} />);
          break;
        case "Shame Board":
          setComponentState(<GoalList goals={fakeGoalList} title={menuState} />);
          break;
        default:
          setComponentState(<p>nada</p>);
          return
      }

  }, [menuState] );


  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <ProfileCard userInfo={fakeUser} />
        {true && <FriendList userInfo={fakeUser} />}
        
      </div>
      <div className="col-12 col-md-8">
        <ProfileMenu setMenuState={setMenuState}/>
        {componentState}
      </div>
    </div>
  );
};

export default Home;