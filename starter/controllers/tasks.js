const Task = require('../models/task.js')

const getAllTasks = async (req,res)=>{
    try {
       const tasks = await Task.find({})
       res.status(200).json({ tasks })
    }
    catch (err) {
        res.status(500).json({ msg:err });
    }
    
};

const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body)
    res.status(201).json({ task })
    }
    catch (err) {
        res.status(500).json({ msg:err });
    }
    
};

const getTask = async (req,res)=>{
    const { id:taskID } = req.params
    try {
        const task = await Task.findById(taskID);
        if(!task){
            return res.status(404).json({ msg: `No task with id : ${taskID}` })
        }
        res.status(201).json({ task });
    }
    catch (err) {
        res.status(500).json({ msg:err });
    }
};

const deleteTask = async (req,res)=>{
    try {
        const { id:taskId } = req.params;
        const task = await Task.findOneAndDelete({ _id:taskId });
        if(!task){
            return res.status(404).json({ msg: `No task with id : ${taskID}`});
        }
        else {res.status(200).json({ task })}
    }
    catch (err) {
        res.status(500).json({ msg:err });
    }
};

const updateTask = async (req,res)=>{
    const { id:taskId } = req.params;
    try {
        const task = await Task.findByIdAndUpdate({ _id:taskId },req.body, {
            new: true,
            runValidators: true
        })
        if(!task) {
            res.status(404).json({msg: `No task with id : ${ taskId }`})
        }
        else {res.status(200).json({ task })}
    }
    catch (err) {
        res.status(500).json({ msg:err.message })
    }
}

module.exports = { getAllTasks , createTask , getTask , updateTask , deleteTask };