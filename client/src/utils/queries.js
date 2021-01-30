import gql from 'graphql-tag';
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      goals {
        _id
        goalTitle
        goalDescription
        goalCategory
        goalStatus
        # startDate
        # dueDate
        createdAt
        milestones{
            _id
            title
            status
            createdAt
        }
        commentCount
        comments {
          _id
          createdAt
          commentBody
          username
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;
export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      profilePhoto
      friendCount
      friends {
        _id
        username
      }
      goals {
        _id
        username
        goalTitle
        goalCategory
        goalStatus
        goalDescription
        # startDate
        # dueDate
        createdAt
        comments {
          _id
          commentBody
          username
        }
      }
      friendRequests {
        _id
        username
      }
    }
  }
`;
export const QUERY_GOALS = gql`
  query goals($username: String) {
    goals(username: $username) {
        _id
        username
        goalTitle
        goalDescription
        goalCategory
        goalStatus
        # startDate
        # dueDate
        createdAt
        milestones{
            _id
            title
            status
            createdAt
        }
        commentCount
        comments {
          _id
          createdAt
          commentBody
          username
        }
    }
  }
`;
export const QUERY_GOALS_TEMP = gql`
query goals($username: String) {
  goals(username: $username) {
      _id
      username
      goalTitle
      goalDescription
      goalCategory
      goalStatus
      # startDate
      # dueDate
      createdAt
      milestones{
          _id
          title
          status
      }
      comments {
      _id
      createdAt
      commentBody
      username
      }
  }
}
`;
export const QUERY_GOAL = gql`
  query goal($id: ID!) {
    goal(_id: $id) {
        _id
        username
        goalTitle
        goalDescription
        goalCategory
        goalStatus
        # startDate
        # dueDate
        createdAt
        milestones {
          _id
          title
          status
        }
        comments {
          _id
          createdAt
          commentBody
          username
        }
    }
  }
`;

export const QUERY_USERS = gql`
query users {
  users {
  	_id
    username
  	email
    firstName
    lastName
    profilePhoto
    friendRequests {
      _id
      username
    }
    friendCount
  }
}
`;


