const router = require('express').Router();

const home = require('./home.js');
// const login = require('./login.js');
// const dashboard = require('./dashboard.js');

router.use('/', home);
// router.use('/', login);
// router.use('/', dashboard);

module.exports = router;
