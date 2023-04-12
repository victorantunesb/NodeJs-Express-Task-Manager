const Task = require('../models/task.js')

const getAllTasks = async (req,res)=>{
    try {
       const tasks = await Task.find({})
       res.status(200).json({ tasks })
    }
    catch (err) {
        res.status(500).json({ msg:err.message });
        console.log(err.message)
    }
    
};

const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body)
    res.status(201).json({ task })
    }
    catch (err) {
        res.status(500).json({ msg:err.message });
        console.log(err.message)
    }
    
};

const getTask = async (req,res)=>{
    const id = req.params.id
    try {
        const task = await Task.findById(id)
        res.status(201).json({ task });
    }
    catch (err) {
        res.status(500).json({ msg:err.message });
        console.log(err.message)
    }
};

const updateTask = async (req,res)=>{
    const id = req.params.id;
    const name = req.body.name;
    const completed = req.body.completed;
    try {
        const updateTask = await Task.findByIdAndUpdate(id,{ name:name , completed:completed })
        const task = await Task.findById(id)
        res.status(201).json({ task })
    }
    catch (err) {
        res.status(500).json({ msg:err.message })
        console.log(err.message)
    }
}

const deleteTask = (req,res)=>{
    res.send('Delete Task')
}


module.exports = { getAllTasks , createTask , getTask , updateTask , deleteTask };