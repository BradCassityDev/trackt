import React, { useState, useEffect } from 'react';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import ProfileCard from '../components/ProfileCard';
import FriendList from '../components/FriendList';
import ProfileMenu from '../components/ProfileMenu';
import GoalList from '../components/GoalList';
import PeopleList from '../components/PeopleList';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';

// Temp fake data
import fakeGoalList from '../fakeGoalList';
import fakeUser from '../fakeUser';
import fakePeopleList from '../fakePeopleList';

const Home = () => {
  // Home menu state
  const [menuState, setMenuState] = useState("Everyone's Goals");

  // Rendered menu component state
  const [componentState, setComponentState] = useState();

  let { username: userParam } = useParams();

  if(userParam == undefined) {
    console.log('No userParam');
    userParam = Auth.getProfile().data.username;
  }

  console.log(userParam);
  console.log(Auth.getProfile().data.username);


  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });


  const user = data?.me || data?.user || {};
  console.log(user);

  //redirect to home if returned user is logged in user
  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Redirect to="/" />;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  
  


  // useEffect(() => {
  //     // Update rendered component
  //     switch(menuState) {
  //       case "Everyone's Goals":
  //         setComponentState(<GoalList goals={fakeGoalList} title={menuState} />)
  //         break;
  //       case "My Goals":
  //         setComponentState(<GoalList goals={fakeUser.goals} title={menuState} />);
  //         break;
  //       case "People":
  //         setComponentState(<PeopleList people={fakePeopleList} />);
  //         break;
  //       case "Shame Board":
  //         setComponentState(<GoalList goals={fakeGoalList} title={menuState} />);
  //         break;
  //       default:
  //         setComponentState(<p>nada</p>);
  //         return
  //     }

  // }, [menuState] );


  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <ProfileCard user={user} />
        {true && <FriendList userInfo={user} />}
        
      </div>
      <div className="col-12 col-md-8">
        <ProfileMenu setMenuState={setMenuState}/>
        {componentState}
      </div>
    </div>
  );
};

export default Home;