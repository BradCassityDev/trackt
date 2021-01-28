const faker = require('faker');

const db = require('../config/connection');
const { Goal, User } = require('../models');

db.once('open', async () => {
  await Goal.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const displayName = faker.internet.displayName();
    const email = faker.internet.email(username);
    const firstName = faker.internet.firstName();
    const lastName = faker.internet.lastName();
    const password = faker.internet.password();

    userData.push({ username, displayName, email, firstName, lastName, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create friends
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      friendId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }

  // create goals
  let createdGoals = [];
  for (let i = 0; i < 100; i += 1) {
    const goalTitle = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdGoal = await Goal.create({ goalTitle, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { goals: createdGoal._id } }
    );

    createdGoals.push(createdGoal);
  }

  // create comments
  for (let i = 0; i < 100; i += 1) {
    const commentBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomGoalIndex = Math.floor(Math.random() * createdGoals.length);
    const { _id: goalId } = createdGoals[randomGoalIndex];

    await Goal.updateOne(
      { _id: goalId },
      { $push: { comments: { commentBody, username } } },
      { runValidators: true }
    );
  }
// create milestones
for (let i = 0; i < 100; i += 1) {
    const  = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomGoalIndex = Math.floor(Math.random() * createdGoals.length);
    const { _id: goalId } = createdGoals[randomGoalIndex];

    await Goal.updateOne(
      { _id: goalId },
      { $push: { milestones: { title } } },
      { runValidators: true }
    );
  }
  
  console.log('all done!');
  process.exit(0);
});
