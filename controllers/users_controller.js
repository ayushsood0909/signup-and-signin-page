module.exports.profile=function(req,res){
    res.end('<h1>User Profile</h1>');
}
module.exports.sign_in=function(req,res){
    return res.render('user_sign_in',{
        title:"Codeial|Sign In"
    })
}
module.exports.sign_up=function(req,res){
    return res.render('user_sign_up',{
        title:"Codeial|Sign Up"
    })
}
const User=require('../models/user');
//get the signup data
module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('error in finding user in signing up');
    return}
    if(!user){
        User.create(req.body,function(err,user){
            if(err){console.log('error in creating user');
            return}
            return res.redirect('/users/signin');
    
        })
    }else{return res.redirect('back');}
    });
}
//get the signin data
module.exports.createSession=function(req,res){

}