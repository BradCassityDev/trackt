import React from 'react';
// import {  } from '../utils/queries';
import Auth from '../utils/auth';
import image from '../images/placeholder-profile-pic.png';
import ProfileCard from '../components/ProfileCard';
import FriendList from '../components/FriendList';

const Home = () => {

  // Temp fake user object
  const fakeUser = {
    firstName: 'John',
    lastName: 'Smith',
    username: 'JohnSmith',
    email: 'john@email.com',
    friendCount: 7,
    displayName: 'John Smith',
    profilePhoto: image,
    interests: [],
    goals: [],
    friendRequests: [],
    friends: [
        {
            _id: "123456",
            username: "JaneDoe",
            profilePhoto: image,
        },
        {
            _id: "7891234",
            username: "BradCassity",
            profilePhoto: image,
        },
        {
            _id: "543252345",
            username: "BradCassity",
            profilePhoto: image,
        },
        {
          _id: "13423643",
          username: "BradCassity",
          profilePhoto: image,
        },
        {
          _id: "4315345",
          username: "BradCassity",
          profilePhoto: image,
        },
        {
          _id: "23453224",
          username: "BradCassity",
          profilePhoto: image,
        },
        {
          _id: "6322345342",
          username: "BradCassity",
          profilePhoto: image,
        }
    ]
  };

  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <ProfileCard userInfo={fakeUser} />
        <FriendList userInfo={fakeUser} />
      </div>
      <div className="col-12 col-md-8">
        right
      </div>
    </div>
  );
};

export default Home;