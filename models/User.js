const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')
class User extends Model {}

//model is a sequelize model inside the npm package

User.init( 
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    
    user_name: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_pass: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{len: [3]}
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
}

);
module.exports = User