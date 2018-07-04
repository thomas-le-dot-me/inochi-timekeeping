const User = require('./../models/user.model');

module.exports = {
    addOneUser : (req, res, next) => {
        new User(req.body).save((err, user) =>{
            if(err){
                res.send(err);
            }else if(!user){
                res.send(400);
            }else{
                return res.send(user);
            }
            next();
        });
    }
}