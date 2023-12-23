const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
  },
  {
  sequelize,
  modelName: 'post',
}
);



Post.belongsTo(User, {
    foreignKey: 'userId',
    allowNull: false,
    onDelete: 'CASCADE',

})

module.exports = Post;