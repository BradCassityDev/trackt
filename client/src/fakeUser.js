import image from './images/placeholder-profile-pic.png';
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
    goals: [
      {
        _id: "asdfsadfkljlkjoi",
        goalTitle: "My first Goal",
        goalDescription: "This is the description",
        goalStatus: "In Progress",
        goalCategory: "Fitness",
        startDate: "1/21/2021",
        dueDate: "1/31/2021",
        createdAt: "January 1/14/2021 at 3:15 PM",
        profilePhoto: image,
        comments: [
            {
                _id: "asdfdasfsdfdsf",
                commentBody: "I think this will be a hard goal to hit, but I know you can do it! Good luck!",
                username: "SupportivePerson",
                createdAt: "January 23rd at 9:20 AM"
            },
            {
                _id: "asdfdasfsdfdsf",
                commentBody: "I'll see you on the shameboard!",
                username: "NotSupportivePerson",
                createdAt: "January 23rd at 10:19 AM"
            }
        ],
        milestones: [
            {
                milestoneTitle: "Milestone 1",
                milestoneStatus: "Completed",
                createdAt: "January 1/21/2021 at 9:23 PM"
            },
            {
                milestoneTitle: "Milestone 2",
                milestoneStatus: "Incomplete"
            }
        ]
    },
    {
        _id: "lkjoiasnfddsa",
        goalTitle: "My second Goal",
        goalDescription: "This is the description",
        goalStatus: "In Progress",
        goalCategory: "Fitness",
        startDate: "1/21/2021",
        dueDate: "1/31/2021",
        createdAt: "January 1/14/2021 at 3:15 PM",
        profilePhoto: image,
        comments: [
            {
                _id: "asdfdasfsdfdsf",
                commentBody: "I think this will be a hard goal to hit, but I know you can do it! Good luck!",
                username: "SupportivePerson",
                createdAt: "January 23rd at 9:20 AM"
            },
            {
                _id: "asdfdasfsdfdsf",
                commentBody: "I'll see you on the shameboard!",
                username: "NotSupportivePerson",
                createdAt: "January 23rd at 10:19 AM"
            }
        ],
        milestones: [
            {
                milestoneTitle: "Milestone 1",
                milestoneStatus: "Completed",
                createdAt: "January 1/21/2021 at 9:23 PM"
            },
            {
                milestoneTitle: "Milestone 2",
                milestoneStatus: "Incomplete"
            }
        ]
    },
    {
      _id: "dasfjoineafo",
      goalTitle: "My third Goal",
      goalDescription: "This is the description",
      goalStatus: "In Progress",
      goalCategory: "Fitness",
      startDate: "1/21/2021",
      dueDate: "1/31/2021",
      createdAt: "January 1/14/2021 at 3:15 PM",
      profilePhoto: image,
      comments: [
          {
              _id: "asdfdasfsdfdsf",
              commentBody: "I think this will be a hard goal to hit, but I know you can do it! Good luck!",
              username: "SupportivePerson",
              createdAt: "January 23rd at 9:20 AM"
          },
          {
              _id: "asdfdasfsdfdsf",
              commentBody: "I'll see you on the shameboard!",
              username: "NotSupportivePerson",
              createdAt: "January 23rd at 10:19 AM"
          }
      ],
      milestones: [
          {
              milestoneTitle: "Milestone 1",
              milestoneStatus: "Completed",
              createdAt: "January 1/21/2021 at 9:23 PM"
          },
          {
              milestoneTitle: "Milestone 2",
              milestoneStatus: "Incomplete"
          }
      ]
  }
    ],
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

  export default fakeUser;