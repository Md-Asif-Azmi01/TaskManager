// const authMiddleware = require("../middleware/authMiddleware");
const {addTask, editTask, getTask, deleteTask, getAllTasks} = require("../services/task");
const router = require('express').Router();

router.post('/addtask', addTask);
router.put('/edittask/:id', editTask);
router.get('/gettask/:id', getTask);
router.delete('/deletetask/:id', deleteTask);
router.get('/getalltasks', getAllTasks);

module.exports = router;