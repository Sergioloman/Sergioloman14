const Comment = require('./Comment')
const Post = require('./Post')
const User = require('./User')

User.hasMany(Post,{
    foreignKey: "userId",
    
})
Post.belongsTo(User,{
    foreignKey: "userId",

}),

Comment.belongsTo(User,{
    foreignKey: "userId",
})
Comment.belongsTo(Post,{
    foreignKey: "postId",
})

User.hasMany(Comment,{
    foreignKey: "userId",
})

Post.hasMany(Comment,{
    foreignKey: "postId",
})



module.exports = {
    Comment,
    Post,
    User,
}