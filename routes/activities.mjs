import express from 'express'
import axios from 'axios'

import { mapper } from '../lib/mapper.mjs'
import { getLastUser } from '../lib/users.mjs'

export const BORED_API = 'https://www.boredapi.com/api'

const router = express.Router()

router.get('/activities', async (_, res, next) => {
  try {
    const lastUser = getLastUser()

    const response = await axios.get(`${BORED_API}/activity`)
    const activity = mapper(response.data)

    if (
      lastUser.accessibility === activity.accessibility &&
      lastUser.price === activity.price
    ) {
      return res.json(activity)
    } else {
      return res.json({})
    }
  } catch (error) {
    return next(error)
  }
})

export default router
