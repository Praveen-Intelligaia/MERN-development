const mongoose = require('mongoose');
var validate = require('koa-validation');
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
    firstname: { type:
         String,
         min:4,
         max:30
    },
    lastname: {
        type:
        String,
    },

    email:{
        type:
        String,
        min:6,
        max:10
    },
    password:{
        type:String,
        min:6,
        max:16

    },
})
// userSchema.pre('save', async function(next){
//     console.log("hello from inside")
//     if(this.isModified('password')){

//         this.password = await bcrypt.hash(this.password, 12);
//         this.cpassword = await bcrypt.hash(this.cpassword, 12);
//     }
//     next();
// });

module.exports = mongoose.model("users", userSchema);