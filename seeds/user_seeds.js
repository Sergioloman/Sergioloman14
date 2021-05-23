const sequelize = require('../config/connection');
const { User } = require('../models');

const  userData = [
    {
        username: 'sergio',
        password: "pass9999"
    },
    {
        username: 'oigres',
        password: "pass6666"
    }
]

const userSeeds = () => User.bulkCreate(userData,{individualHooks: true});

module.exports = userSeeds;