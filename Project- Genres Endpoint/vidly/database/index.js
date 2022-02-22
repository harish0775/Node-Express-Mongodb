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
   //eq(equal)
   //ne(not equal)
   //gt(greater than)
   //gte(grate than equal)
   //lt(less than or equal to)
   //in
   //nin(not in)
   const getvale = await Course
//    .find({author :"Harish Nishad", ispublish :"true"})
   //.find({pric : {$gte : 10,$lte:20}})   //select course less than of equal to 
 //  .find({price : {$in:[10,20,49]}}) //set couse 20 20 50 price
 //.or([{author : 'Harish Nishad'},{ispublish : true}])//Apply Logic Operator
 //.and([])
 .find({author : /^Harish/})  //author name start from harish
 .find({author : /Nishad$/i}) //author name end with Nishad need case insective use(  i ) 
 .find({author : /.*Harish.*/i})//author name anywhere with Harish
   .limit(2)
   .sort({name:1})
   .select({name :1,tag :1,author :"Harish Nishad", ispublish :"true"});//this select all
   console.log('course',getvale);
}

getcourse();