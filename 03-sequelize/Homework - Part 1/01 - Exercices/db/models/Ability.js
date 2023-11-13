const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Ability', {
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
    },
    mana_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat(value){
           if(value < 10.0 || value > 250.0){
              throw new Error('El valor debe estar entre 10.0 y 250.0')
           }
        }
     }
    }
  },{
    indexes: [{
      unique: true,
      fields: ['name', 'mana_cost'],
      name: "compositeIndex"
    }]
  });
};