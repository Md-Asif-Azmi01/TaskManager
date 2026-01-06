// const { findById } = require('../model/user');
const Task = require('../model/task');

const addTask = async (req, res) => {
    try {
        const {title, priority, status, description} = req.body;
        if(!title || !description){
            return res.status(400).json({error: "Please fill all the fields"});
        }
        if(title.length < 3){
            return res.status(400).json({error: "Title must be at least 3 characters long"});
        }
        if(description.length < 3){
            return res.status(400).json({error: "Description must be at least 3 characters long"});
        }
        console.log("before before save");
        const newtask = new Task({title, priority, status, description});
        console.log("before save");
        await newtask.save();
        console.log("after save");
        return res.status(200).json({message: "Task added successfully", Task: newtask});
    } catch (error) {
        console.log("Error in addTask:", error);
        return res.status(500).json({error: "Internal server error"});
    }
};

const editTask = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, priority, status, description} = req.body;
        // const {user} = req;
        if(!title || !description){
            return res.status(400).json({error: "Please fill all the fields"});
        }
        if(title.length < 3){
            return res.status(400).json({error: "Title must be at least 3 characters long"});
        }
        if(description.length < 3){
            return res.status(400).json({error: "Description must be at least 3 characters long"});
        }
    await Task.findByIdAndUpdate(id, {title, priority, status, description});
        return res.status(200).json({message: "Task Update successfully"});
    } catch (error) {
        console.log("Error in editTask:", error);
        return res.status(500).json({error: "Internal server error"});
    }
};

const getTask = async (req, res) => {
    try {
        const {id} = req.params;
        const taskDetails = await Task.findById(id)
        return res.status(200).json({taskDetails});
    } catch (error) {
        console.log("Error in getTask:", error);
        return res.status(500).json({error: "Internal server error"});
    }
};

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const taskDetails = await Task.findByIdAndDelete(id);
        return res.status(200).json({success: "Task Deleted successfully"});
    } catch (error) {
        console.log("Error in deleteTask:", error);
        return res.status(500).json({error: "Internal server error"});
    }
};

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        let yetToStart = tasks.filter(task => task.status === 'yetToStart');
        let inprogress = tasks.filter(task => task.status === 'inprogress');
        let completed = tasks.filter(task => task.status === 'completed'); 
        return res.status(200).json({ yetToStart, inprogress, completed });
    } catch (error) {
        console.log("Error in getAllTasks:", error);
        return res.status(500).json({error: "Internal server error"});
    }
};

module.exports = {addTask, editTask, getTask, deleteTask, getAllTasks};