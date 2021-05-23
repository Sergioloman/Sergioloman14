const { Comment } = require('../models');

const commentData = [
  {
      text: "this is all i have to say",
      postId: 1,
      userId: 2,
  },
  {
      text:"I would have said it diferently",
      postId:2,
      userId:1,
  },
  {
    text: "yes its true",
    postId:3,
    userId:4
  },
  { 
    text: "Indeed.........",
    postId:4,
    userId:3,
  }
]

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;