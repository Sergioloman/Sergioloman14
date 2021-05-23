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
    },
    {
        title: "Objects fall when dropped from above",
        userId: 3,
        postUrl: 'https://imgur.com/gallery/fALlqtV'
    },
    {
        title: "Never underestimate the power of friendship",
        userId: 4,
        postUrl: 'https://imgur.com/gallery/n5iOc72'

    }
];

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;