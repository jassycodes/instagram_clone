'use strict';
module.exports = function(sequelize, DataTypes) {
  var Picture = sequelize.define('Picture', {
    src: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return Picture;
};