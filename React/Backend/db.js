/*
Todo{
            title:string,
            description:string,
            completed:boolean
}
*/
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shiva:a99jr8erSMuPbvSv@cluster0.n7eusza.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}