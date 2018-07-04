const InOut = require('./../models/inout.model');

module.exports = {
    logTime : (req, res, next) => {
        new InOut(req.body).save((err, user) =>{
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