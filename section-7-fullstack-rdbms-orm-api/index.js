// require('dotenv/config');
require('dotenv').config();
const db = require('./db');
const { usersTable } = require('./drizzle/schema');

const getAllUsers = async () => {
  const users = await db.select().from(usersTable);
  console.log(`Users in DB`, users);
  return users;
};

getAllUsers();

const createUsers = async ({ id, name, email }) => {
  await db.insert(usersTable).values({
    id,
    name,
    email,
  });
};

// createUsers({ id: 1, name: 'Piyush', email: 'piyush@example.com' });
// createUsers({ id: 2, name: 'Hitesh', email: 'hitesh@example.com' });
