'use strict';

const {
  Model
} = require('sequelize');
const unread = require('./unread');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  };
  posts.init({
    content: DataTypes.STRING,
    multimediaUrl: DataTypes.STRING,
    username: DataTypes.STRING,
    likes: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};