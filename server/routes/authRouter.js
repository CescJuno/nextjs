import express from 'express'
import auth from '../api/auth/[...nextauth]'
const router = express.Router()

router.get('', auth)

export default router