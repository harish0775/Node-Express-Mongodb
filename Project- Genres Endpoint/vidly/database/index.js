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
// async function createCouse(){
//     const course = new Course({
//  name : 'Node Node.js Course new updated',
//  author : 'Harish Nishad new updated',
//  tag : ['Backend','Node.js new Update'],
//  ispublish : true
// })

// const result = await course.save();
// console.log('result',result);
// }
// createCouse();
async  function getcourse(){
   const getvale = await Course.find();
   console.log('course',getvale);
}

getcourse();