const Category = require('./../models/category.model');

module.exports = {
    
    addCategory: (req, res, next) => {
       // let {title, description} = c;
        new Category(req.body).save((err, category) =>{
            if(err){
                res.send(err);
            }else if(!category){
                res.send(400);
            }else{
                return res.send(category);
            }
            next();
        });
    },
    getCategory : (req, res, next) => {
        Category.findById(req.params.id).exec((err, category) => {
            if(err){
                res.send(err);
            }else if(!category){
                res.send(404);
            }else{
                res.send(category);
            }
            next();
        });
        
    },
    getAllCategories: (req, res, next) =>{
        Category.find().exec((err, categories) =>{
            console.log(categories);
            res.send(categories);
            next();
        });
    },
    deleteCategory : (req, res, next) => {
        let category = Category.findById(req.params.id);
        if(category){
            Category.deleteOne(category).exec((err, category) => {
                console.log(category);
                if(err){
                    res.send(err);
                }else if(!category){
                    res.send(404);
                }else{
                    res.send(category);
                }
                next();
            });
        }else{
            res.send(400);
            next();
        }
        
    }

};