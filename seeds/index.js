const userSeeds = require('./user_seeds');
const postSeeds = require('./post_seeds');
const commentSeeds = require('./comment_seeds');

const sequelize = require('../config/connection');

const allSeeds = async () => {
    await sequelize.sync({force: true});
    console.log('\n----- DATABASE SYNCED -----\n');
    await userSeeds();
    console.log('\n----- USERS SEEDED -----\n');
    await postSeeds();
    console.log('\n----- POSTS SEEDED -----\n');
    await commentSeeds();
    console.log('\n----- COMMENTS SEEDED -----\n');
    process.exit(0);

};

//seed all the seeds 
allSeeds()