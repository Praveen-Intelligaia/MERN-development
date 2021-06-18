const mongoose = require('mongoose');
const url = process.env.MONGODB_URL||"mongodb://localhost:27017/koaCrud";
mongoose.connect(url, {  
      useCreateIndex:true,
    useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify:false
    }, ()=>{console.log('mongodb Connection Sucessful at URL:', url)});