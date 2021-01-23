// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  scalar Date

  type User {
    _id: ID
    username: String
    displayName: String
    email: String
    firstName: String
    lastName: String
    friendCount: Int
    goals: [Goal]
    friends: [User]
  }
  
  type Milestone {
    _id: ID
    title: String
  }
  type Goal {
    _id: ID
    goalTitle: String
    goalDescription: String
    goalStatus: String
    goalCategory: String
    createdAt: Date!
    startDate: Date!
    dueDate: Date
    milestones: [Milestone]
    username: String
    commentCount: Int
    comments: [Comment]
  }
  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    goals(username: String): [Goal]
    goal(_id: ID!): Goal
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, displayName: String!, firstName: String!, lastName: String!, password: String!, profilePhoto: String, interests: String): User
    editUser(username: String!, email: String!, displayName: String!, firstName: String!, lastName: String!, password: String!, profilePhoto: String): Auth
    addGoal(goalTitle: String!, goalDescription: String!, goalStatus: String!, goalCategory: String, startDate: Date!, dueDate: Date): Goal
    editGoal(goalTitle: String!, goalDescription: String!, goalStatus: String!, goalCategory: String, startDate: Date!, dueDate: Date): Goal
    addMilestone(goalId: ID!, milestoneTitle: String!): Goal
    deleteMilestone(goalId: ID!, milestoneId: ID!): Goal
    addComment(goalId: ID!, commentBody: String!): Goal
    requestFriend(friendId: ID!): User
    acceptFriend(friendId: ID!): User
    deleteFriend(friendId: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
