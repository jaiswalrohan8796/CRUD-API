import express from 'express'

import { getUsers, addUser, getUser, deleteUser, updateUser } from '../controllers/controller.js'

const router = express.Router()

//get request => Read
router.get('/', getUsers)

//post request => Create 
router.post('/', addUser)

//get request => Read
router.get('/:id', getUser)

//delete request => Delete
router.delete('/:id', deleteUser)

//patch request => Update 
router.patch('/:id', updateUser)

export default router