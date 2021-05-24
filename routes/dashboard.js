const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const authenticate =  require('../utilities/authenticate')
//get all post for personal dashboard

router.get('/',authenticate, (req, res)=>{
    console.log(req.session)
    Post.findAll({
        where: {userId: req.session.userId},
        include:[Comment, User]
    }).then(data=>{
        const posts = data.map(post=>post.get({plain:true}));
        console.log(posts)
        res.render('dashboard',{posts,loggedIn:true})
    })
})

module.exports = router;