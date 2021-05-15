const router = require('express').Router();
// const apiRoutes = require('./api');
//create your api routes

// router.use('/api', apiRoutes);
//use such routes

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;

//create a route that detects for first time user's connection

//create a route for signing in

//create a route for signinig out

//create post routes /crud

//create comment routes / crud

// make sure to check out express sessions for timinhg out session