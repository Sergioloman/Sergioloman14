const {Post} = require('../models');

const postData = [
    {
        title: "the opinions of a real human being",
        user_id : 1
    },
    {
        title: "the feelings of robots ",
        user_id: 2
    }
];

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;