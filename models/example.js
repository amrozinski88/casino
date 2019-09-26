module.exports = function(sequelize, DataTypes) {
  
var casinoDB = sequelize.define("stock", {
  item_name: DataTypes.STRING,
  item_description: DataTypes.STRING
});
  return casinoDB;
};



