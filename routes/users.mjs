import express from 'express'

import { addUser, getLastUser } from '../lib/users.mjs'

const router = express.Router()

router.post('/users', async (req, res, next) => {
  try {
    const { name, accessibility, price } = req.body
    const user = await addUser(name, accessibility, price)
    console.log(getLastUser())
    res.json(user)
  } catch (err) {
    return next(err)
  }
})

export default router
