import React from 'react';
// import {  } from '../utils/queries';
import Auth from '../utils/auth';
import image from '../images/placeholder-profile-pic.png';
import ProfileCard from '../components/ProfileCard';
import FriendList from '../components/FriendList';
import ProfileMenu from '../components/ProfileMenu';
import GoalList from '../components/GoalList';

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
            username: "MarkZuckerberg",
            profilePhoto: image,
        },
        {
            _id: "7891234",
            username: "BradCassity",
            profilePhoto: image,
        },
        {
            _id: "543252345",
            username: "SteveJobs",
            profilePhoto: image,
        },
        {
          _id: "13423643",
          username: "ElonMusk",
          profilePhoto: image,
        },
        {
          _id: "4315345",
          username: "JordanPeterson",
          profilePhoto: image,
        },
        {
          _id: "23453224",
          username: "DaveRamsey",
          profilePhoto: image,
        },
        {
          _id: "6322345342",
          username: "WarrenBuffett",
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
        <ProfileMenu />
        <GoalList />
      </div>
    </div>
  );
};

export default Home;