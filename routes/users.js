const express=require('express');
const router=express.Router();

const usersController=require('../Controllers/users_controller');
router.get('/profile',usersController.profile);
const postcomments=require('../Controllers/post_comments');
router.get('/postcomment',postcomments.profile);
module.exports=router;