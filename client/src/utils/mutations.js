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
  mutation addUser($username: String!, $displayName: String, $email: String!, $firstName: String $lastName: String, $password: String!, $profilePhoto: String) {
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
  mutation updateUser($_id: ID,$username: String, $displayName: String, $email: String, $firstName: String $lastName: String, $password: String, $profilePhoto: String) {
    updateUser(_id: $_id, username: $username, displayName: $displayName, email: $email, firstName: $firstName, lastName: $lastName, password: $password, profilePhoto: $profilePhoto) {
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
  mutation addGoal($goalTitle: String!, $goalDescription: String!, $goalStatus: String!, $goalCategory: String) {
    addGoal(goalTitle: $goalTitle, goalDescription: $goalDescription, goalStatus: $goalStatus, goalCategory: $goalCategory) {
      _id
      goalTitle
      goalDescription
      goalCategory
      goalStatus
      createdAt
      username
      # commentCount
      # comments {
      #   _id
      #   commentBody
      # }
    }
  }
`;
export const UPDATE_GOAL = gql`
    mutation updateGoal($_id: ID, $goalTitle: String, $goalDescription: String, $goalStatus: String, $goalCategory: String ) {
    updateGoal(_id: $_id, goalTitle: $goalTitle, goalDescription: $goalDescription, goalStatus: $goalStatus, goalCategory: $goalCategory) {
      
      goalTitle
      goalDescription
      goalCategory
      goalStatus
      createdAt
      username
    }
  }
`;
export const ADD_MILESTONE = gql`
  mutation addMilestone($goalId: ID!, $title: String!) {
    addMilestone(goalId: $goalId, title: $title) {
      _id
      milestones {
        _id
        title
      }
    }
  }
`;
export const UPDATE_MILESTONE = gql`
  mutation updateMilestone($goalId: ID!, $_id: ID!, $status: String, $title:String) {
    updateMilestone(goalId:$goalId, _id: $_id, status: $status, title:$title) {
      _id
      goalTitle
      milestones
        {_id
        title
        status}
    
    }
  }	
`;
export const DELETE_MILESTONE = gql`
  mutation deleteMilestone($goalId: ID, $_id: ID!) {
    deleteMilestone(goalId: $goalId, _id: $_id) {
        goalTitle
      milestones{
        _id
        title
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($goalId: ID!, $commentBody: String!) {
    addComment(goalId: $goalId, commentBody: $commentBody) {
      _id
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
export const REJECT_FRIEND = gql`
  mutation rejectFriend($id: ID!) {
    rejectFriend(friendId: $id) {
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
    removeFriend(friendId: $id) {
      _id
      username
      friends {
        _id
        username
      }
    }
  }
`;
