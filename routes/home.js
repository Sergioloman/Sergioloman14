const router = require('express').Router();
// const { post } = require('.');
const { Post, User, Comment } = require('../models');


// get all post for homepage view ( using try/catch asnync)
// router.get("/", async (req, res)=>{
//      try {
//          const postData = await Post.findAll({
//              include: [User]//
//          })
//          const posts = postData.map(post=>post.get({plain:true}))           //this will give us all our post
//          res.render("home-posts",{posts})//we call the handlebars view
//         }

//       catch (error) {
//          res.status(500).json(error)
//      }
// })

//get all posts from homepage view (using promises)
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

//get individual post 
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