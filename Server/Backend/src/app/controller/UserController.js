const User = require('../model/User');
const App = require ('../routes/app')
const bcrypt=require('bcryptjs')


module.exports = {
    async getUserList(ctx){
        try{
            var users = await User.find()
            ctx.body = {users};
            console.log(users)
           
            
        }catch(error){
            ctx.throw(error);
        }
    },
    async signin(ctx){
        var body=ctx.request.body;
        console.log(body)

        try{
            var users = await User.findOne({email:body.email})
            ctx.body = {users};
            console.log(users)        
        }catch(error){
            ctx.throw(error);
        }
    },
    
    

    async CreateUser(ctx){
        try{
            var{body}=ctx.request;
            console.log(body)
            var user = new User();
            user.firstname=body.firstname;
            user.lastname=body.lastname;
            user.email=body.email;
            user.password=body.password;
            user.save();
            ctx.body={status:"sucess"}
            ctx.status=201;
          
        }
        catch(error){
            ctx.throw(error);
        }
    },
    async deleteUser(ctx){
        var body = ctx.request.query;
    
        var deleteUser = await User.findOneAndRemove(body)
        ctx.body = {deleteUser}
        ctx.body={status:"deleted"}
        ctx.status=410;
    }
        

}