import { db } from '../index.mjs'

// Function to add a user to the database
export const addUser = async (name, accessibility, price) => {
  // Create a new user object
  const user = { name, accessibility, price }
  const { users } = db.data
  users.push(user)
  await db.write()
  // Return the new user object
  return user
}

// Function to get the last user from the database
export const getLastUser = () => {
  // Add the user to the database
  const { users } = db.data
  return users.at(-1)
}
