const mongoose = require('mongoose');
const { stringify } = require('querystring');

mongoose.connect('mongodb://localhost/ClassRoom').then(()=>console.log('Connect to Database Succesfully')).catch(err=>console.error('error while connecting db...',err));

const classroomSchema = new mongoose.Schema({
     title:  {
         type : String,
         required : true
     },
     duration : String,
     tags : [String],
     author : String,
     ispublish : Boolean,
     date: { type: Date, default: Date.now },
})


const Classroom = mongoose.model('Classroom',classroomSchema);

async function createroom(){
 const room = new Classroom({
       title : "Node.js",
  duration : '3 month',
  tags : ['Backend'],
  author : "Harish Nishad",
  ispublish : true
 })
   try {
       const result = await room.save();
console.log('Room',result);
   } catch (error) {
       console.error('Error while Creating document',error);
   }
} 
createroom();
