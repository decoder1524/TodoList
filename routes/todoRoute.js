import express from 'express'
import  {createTodoController, deleteTodoController, getTodoController, updateTodoController } from '../controllers/todoController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/create',authMiddleware,createTodoController)
router.post('/getAll/:userId', authMiddleware,getTodoController)
router.delete('/delete/:id',authMiddleware,deleteTodoController)
router.patch('/update/:id',authMiddleware,updateTodoController)
export default router