const { Comment } = require('../models');

const commentData = [
  {
      text: "this is all i have to say",
      post_id: 1,
      user_id: 2,
  },
  {
      text:"I would have said it diferently",
      post_id:2,
      user_id:1,
  }]

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;