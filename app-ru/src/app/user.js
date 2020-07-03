module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING
    }, 
    {
      freezeTableName: true // Model tableName will be the same as the model name 
    }
  });

  return User;
}