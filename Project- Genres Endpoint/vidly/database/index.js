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
// async  function getcourse(){
//    //eq(equal)
//    //ne(not equal)
//    //gt(greater than)
//    //gte(grate than equal)
//    //lt(less than or equal to)
//    //in
//    //nin(not in)
//    const getvale = await Course
// //    .find({author :"Harish Nishad", ispublish :"true"})
//    //.find({pric : {$gte : 10,$lte:20}})   //select course less than of equal to 
//  //  .find({price : {$in:[10,20,49]}}) //set couse 20 20 50 price
//  //.or([{author : 'Harish Nishad'},{ispublish : true}])//Apply Logic Operator
//  //.and([])
//  .find({author : /^Harish/})  //author name start from harish
//  .find({author : /Nishad$/i}) //author name end with Nishad need case insective use(  i ) 
//  .find({author : /.*Harish.*/i})//author name anywhere with Harish
//    .limit(2)
//    .sort({name:1})
//    .count() //Count the Number of Document Match this Creatira.
//    .select({name :1,tag :1,author :"Harish Nishad", ispublish :"true"});//this select all
//    console.log('course',getvale);
// }

// getcourse();


//update Course

// async function updateCourse(id){
//     const course = await Course.findById(id);
//     if(!course) return;
//  // if(course.ispublish) return; //use query first approach before update
// course.ispublish = true;
// course.author = 'Krishna Nishad';

// const result = await course.save();
// console.log(result);
// console.log("Couse is Update........")
//     }
// updateCourse('5a68fdc3615eda645bc6bdec'); //issue


async function updateCourse(id){
    const course = await Course.update({_id:id} ,{ //ispublish:false  //findbyidAndUpdate   //
   $set : {
       author : "Haris Nishad",
       ispublish : false
   }
    },{
        new : true  //get update document
    });
    //more go mongo db operator
    if(!course) return;
 // if(course.ispublish) return; //use query first approach before update
course.ispublish = true;
course.author = 'Krishna Nishad';

const result = await course.save();
console.log(result);
console.log("Couse is Update........")
    }
updateCourse('5a68fdc3615eda645bc6bdec'); //issue



async function removeCourse(id){
 //   const result = await Course.deleteOne({_id:id});  //or DeleteMany
    const course = await Course.findByIdAndRemove(id);
    console.log(course);
}

removeCourse('5a68fdc3615eda645bc6bdec');
//mongoimport --db mongo-exercises --collection courses --drop --file exercise-data.json --jsonArray