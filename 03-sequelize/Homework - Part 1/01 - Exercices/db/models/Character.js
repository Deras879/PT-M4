const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Character', {
      code: {
        type: DataTypes.STRING(5),
        primaryKey: true,
        validate: {
         notIn(value) {
         if (value === "HENRY" || value === "henry") {
           throw new Error('No puede ser Henry');
         }
       }
      }
      },
      name:{
         type: DataTypes.STRING,
         unique:true,
         allowNull: false,
         validate: {
            notIn(value) {
            if (value === "Henry" || value === "SoyHenry" || value === "Soy Henry") {
              throw new Error('No puede ser [Henry, SoyHenry, Soy Henry]');
            }
          }
         }
      },
      age:{
         type: DataTypes.INTEGER,
      },
      race: {
         type: DataTypes.ENUM ('Human', 'Elf', 'Machine', 'Demon', 'Animal', 'Other'),
         defaultValue: "Other"
      },
      hp:{
         type: DataTypes.FLOAT,
         allowNull: false,
      },
      mana: {
         type: DataTypes.FLOAT,
         allowNull: false,
      
      }
   },{
      timestamps:false
   });
};
