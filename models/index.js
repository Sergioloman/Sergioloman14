const Comment = require('./Comment')
const Post = require('./Post')
const User = require('./User')

Post.belongsTo(User,{
    foreignKey: "userId",
    onDelete:"CASCADE",
}),
Comment.belongsTo(User,{
    foreignKey: "userId",
    onDelete:"CASCADE",
})
Comment.belongsTo(Post,{
    foreignKey: "postId",
    onDelete:"CASCADE",
})
Post.hasMany(Comment,{
    foreignKey: "postId",
})

User.hasMany(Comment,{
    foreignKey: "userId",
    onDelete:"CASCADE",
})
User.hasMany(Post,{
    foreignKey: "userId",
    onDelete:"CASCADE",
})


module.exports = {
    Comment,
    Post,
    User,
}