import React, { useState, useEffect } from 'react';
import { QUERY_USER, QUERY_ME, QUERY_GOALS_TEMP } from '../utils/queries';
import Auth from '../utils/auth';
import ProfileCard from '../components/ProfileCard';
import FriendList from '../components/FriendList';
import ProfileMenu from '../components/ProfileMenu';
import GoalList from '../components/GoalList';
import PeopleList from '../components/PeopleList';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import MyGoalList from '../components/MyGoalList';

// Temp fake data
import fakeGoalList from '../fakeGoalList';
import fakeUser from '../fakeUser';
import fakePeopleList from '../fakePeopleList';

const Home = () => {

  // Check if user is logged in
  if (!Auth.loggedIn()) {
    window.location.assign('/login');
  }
  
  // Home menu state
  const [menuState, setMenuState] = useState('My Goals');

  // Rendered menu component state
  const [componentState, setComponentState] = useState();
  const [goalListState, setGoalListState] = useState();
  const [activeProfile, setActiveProfile] = useState();

  // Grab username parameter
  let { username: userParam } = useParams();

  if(userParam == undefined) {
    userParam = Auth.getProfile().data.username;    
  }
  

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });

  
  const user = data?.me || data?.user || {};


  useEffect(() => {

    if(Auth.getProfile().data.username !== userParam) {
      setActiveProfile(userParam)
      setMenuState('My Goals');
    } else {
      setActiveProfile(user.username)
    }
      

    if(!menuState || Auth.getProfile().data.username !== activeProfile) {
      setMenuState('My Goals');
    }
    
    if (data && !loading) {
      switch(menuState) {
        case "Everyone's Goals":
          setComponentState(<GoalList goals={goalListState} setGoalListState={setGoalListState} menuState={menuState} />)
          break;
        case "My Goals":
          setComponentState(<MyGoalList user={user} goals={user.goals} username={activeProfile} />);
          break;
        case "People":
          setComponentState(<PeopleList />);
          break;
        case "Shame Board":
          setComponentState(<GoalList goals={goalListState} menuState={menuState} setGoalListState={setGoalListState} />);
          break;
        default:
          setComponentState(<p>nada</p>);
          return
      }
    }

  }, [menuState, data, user, userParam, user.username, /*myGoals*/] );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <ProfileCard user={user} />
        <FriendList userInfo={user} />
        
      </div>
      <div className="col-12 col-md-8">
        {Auth.getProfile().data.username === activeProfile && <ProfileMenu menuState={menuState} setMenuState={setMenuState}/>}
        {componentState}
      </div>
    </div>
  );
};

export default Home;