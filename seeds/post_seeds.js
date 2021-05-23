const {Post} = require('../models');

const postData = [
    {
        title: "the opinions of a real human being",
        postUrl:'https://imgur.com/gallery/tW8SY',
        userId : 1,
    },
    {
        title: "the feelings of robots ",
        userId: 2,
        postUrl:'https://imgur.com/gallery/YUJYQ',
    }
];

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;