'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class unread extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  unread.init({
    postId: DataTypes.INTEGER,
    username: DataTypes.STRING,
    unread: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'unread',
  });
  return unread;
};