import express from 'express'
import axios from 'axios'
import { mapper } from '../lib/mapper.mjs'

export const BORED_API = 'https://www.boredapi.com/api'

const router = express.Router()

router.get('/activities', async (_, res, next) => {
  try {
    const response = await axios.get(`${BORED_API}/activity`)
    const activity = mapper(response.data)
    return res.json(activity)
  } catch (error) {
    return next(error)
  }
})

export default router
