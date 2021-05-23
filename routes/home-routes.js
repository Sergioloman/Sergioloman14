const router = require('express').Router();
// const { post } = require('.');
const { Post, User, Comment } = require('../models');


//get all post for homepage view ( using try/catch asnync)
// router.get("/", async (req, res)=>{
//      try {
//          const postData = await Post.findAll({
//              include: [User]//
//          })
//          const posts = postData.map(post=>post.get({plain:true}))//this will give us all our post
//          res.render("home-posts",{posts})//we call the handlebars view
//         } catch (error) {
//          res.status(500).json(error)
//      }
// })

//get all posts from homepageview (using promises)

router.get('/',(req, res)=>{
    Post.findAll({
        attributes: [
            'id',
            'postUrl',
            'title',
          ],
        include: [
            {
              model: Comment,
              attributes: ['id', 'text', 'postId', 'userId'],
              include: {
                model: User,
                attributes: ['username']
              }
            },
            {
              model: User,
              attributes: ['username']
            }
        ]
    }).then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
  
        res.render('home-posts', {
          posts,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
})


module.exports = router;