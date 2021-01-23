import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $displayName: String!, $email: String!, $firstName: String! $lastName: String!, $password: String!, $profilePhoto: String) {
    addUser(username: $username, displayName: $displayName, email: $email, firstName: $firstName, lastName: $lastName, password: $password, profilePhoto: $profilePhoto) {
      token
      user {
        _id
        username
        displayName
        email
        firstName
        lastName
        password
        profilePhoto
      }
    }
  }
`;
export const UPDATE_USER = gql`
  mutation updateUser($username: String!, $displayName: String!, $email: String!, $firstName: String! $lastName: String!, $password: String!, $profilePhoto: String) {
    updateUser(username: $username, displayName: $displayName, email: $email, firstName: $firstName, lastName: $lastName, password: $password, profilePhoto: $profilePhoto) {
    _id
    username
    displayName
    email
    firstName
    lastName
    password
    profilePhoto
    }
  }
`;
export const ADD_GOAL = gql`
  mutation addGoal($goalTitle: String!, $goalDescription: String!, $goalStatus: String!, $goalCategory: String, $startDate: Date, $dueDate: Date) {
    addGoal(goalTitle: $goalTitle, goalDescription: $goalDescription, goalStatus: $goalStatus, goalCategory: $goalCategory, startDate: $startDate, dueDate: $dueDate) {
      _id
      goalTitle
      goalDescription
      goalCategory
      goalStatus
      startDate
      dueDate
      createdAt
      username
      commentCount
      comments {
        _id
        commentBody
      }
    }
  }
`;
export const UPDATE_GOAL = gql`
  mutation updateGoal($goalTitle: String!, $goalDescription: String!, $goalStatus: String!, $goalCategory: String, $startDate: Date!, $dueDate: Date) {
    updateGoal(goalTitle: $goalTitle, goalDescription: $goalDescription, goalStatus: $goalStatus, goalCategory: $goalCategory, startDate: $startDate, dueDate: $dueDate) {
      _id
      goalTitle
      goalDescription
      goalCategory
      goalStatus
      startDate
      dueDate
      createdAt
      username
      commentCount
      comments {
        _id
        commentBody
      }
    }
  }
`;
export const ADD_MILESTONE = gql`
  mutation addMilestone($goalId: ID!, $milestoneTitle: String!) {
    addMilestone(goalId: $goalId, milestoneTitle: $milestoneTitle) {
      _id
      milestones {
        _id
        milestoneTitle
        createdAt
      }
    }
  }
`;
export const DELETE_MILESTONE = gql`
  mutation deleteMilestone($goalId: ID!, $milestoneTitle: String!) {
    deleteMilestone(goalId: $goalId, milestoneTitle: $milestoneTitle) {
      _id
      milestones {
        _id
        milestoneTitle
        createdAt
      }
    }
  }
`;
export const ADD_COMMENT = gql`
  mutation addComment($goalId: ID!, $commentBody: String!) {
    addComment(goalId: $goalId, commentBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;
export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;
export const ACCEPT_FRIEND = gql`
  mutation acceptFriend($id: ID!) {
    acceptFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;
export const REMOVE_FRIEND = gql`
  mutation removeFriend($id: ID!) {
    removeFriend(id: $id) {
      _id
      username
      friends {
        _id
        username
      }
    }
  }
`;
