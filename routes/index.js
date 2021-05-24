const router = require('express').Router();

const home = require('./home.js');
const login = require('./login.js');

router.use('/', home);
router.use('/', login);

module.exports = router;
