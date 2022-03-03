const express=require('express');
const router=express.Router();

const usersController=require('../Controllers/users_controller');
router.get('/profile',usersController.profile);
router.get('/signin',usersController.sign_in);
router.get('/signup',usersController.sign_up);
const postcomments=require('../Controllers/post_comments');
router.get('/postcomment',postcomments.profile);
router.post('/create',usersController.create);
module.exports=router;