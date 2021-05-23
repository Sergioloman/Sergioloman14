const sequelize = require('../config/connection');
const { User } = require('../models');

const  userData = [
    {
        username: 'Sergioloman',
        password: "pass1111"
    },
    {
        username: 'Destroyer99',
        password: "pass2222"
    },
    {
        username: 'RexCommander',
        password: "pass3333"
    },
    {
        username: 'OmegaDeer',
        password: "pass4444"
    }

]

const userSeeds = () => User.bulkCreate(userData,{individualHooks: true});

module.exports = userSeeds;