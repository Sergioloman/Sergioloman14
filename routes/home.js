const router = require('express').Router();
const sequelize = require('../config/connection');

const { Post, User, Comment } = require('../models');

//get all posts for homepage view
router.get('/',(req, res)=>{
    Post.findAll({
        include: [User]
    }).then(postData => {
        const posts = postData.map(post => post.get({ plain: true }));
        console.log(posts)
        res.render('home', {posts,loggedIn: req.session.loggedIn});
      })
      .catch(error => {
        res.status(500).json(error);
      });
})

//get individual post for homepage view
router.get('/:id',(req, res)=>{
  Post.findOne({
    where:{id: req.params.id},
    include: [Comment, User]
  }).then(postData =>{
    const post = postData.get({plain: true})
    console.log(post)
    res.render('singlePost',{post})
  })
})

module.exports = router;