import express from 'express'
import testCon from '../controllers/testController.js'

//router object
const router = express.Router()

//Routes
router.get('/',testCon)

//exports
export default router