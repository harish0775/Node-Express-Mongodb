const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/player')
.then(()=>console.log('Connect to Database...'))
.catch(err=>console.error("Failed to connnect db",err));