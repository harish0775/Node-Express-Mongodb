const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/player')
.then(()=>console.log('Connect to Database...'))
.catch(err=>console.error("Failed to connnect db",err));

const courseSchema = new mongoose.Schema({
   name: String,
   author: String,
   tag : [String],
   date : {type:Date,default:Date.now},
   ispublish : Boolean
})
const Course = mongoose.model('Course',courseSchema);
const course = new Course({
 name : 'Node Node.js Course',
 author : 'Harish Nishad',
 tag : ['Backend','Node.js'],
 ispublish : true
})
