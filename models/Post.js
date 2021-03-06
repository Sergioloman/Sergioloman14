const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key:"id",
      }

    },
    postUrl: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{ isURL: true}
    }
  },
  {
    sequelize,
  }
);

module.exports = Post;
