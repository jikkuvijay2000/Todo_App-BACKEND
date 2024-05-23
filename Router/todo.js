const express = require('express')
const { allTodo, inputTodo } = require('../Controllers/todo')
const { verifyToken } = require('../Controllers/users')
const { deleteTODO } = require('../Controllers/deletetodo')
const { updateTodo } = require('../Controllers/updateTodo')
const router = express.Router()


router.get('/gettodo',verifyToken,allTodo)

router.post('/addtodo',verifyToken,inputTodo)

router.delete('/deletetodo/:id',deleteTODO)

router.put('/updatetodo/:id',updateTodo)


module.exports = {todoRouter:router}