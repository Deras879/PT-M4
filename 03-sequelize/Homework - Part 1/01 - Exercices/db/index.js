const { Sequelize, Op } = require('sequelize');
const modelCharacter = require('./models/Character.js');
const modelAbility = require('./models/Ability.js');
const modelRole = require('./models/Role.js');

const db = new Sequelize(
   'postgres://postgres:admin@localhost:5432/henrydatabase',
   {
      logging: false,
   }
);

modelCharacter(db);
modelAbility(db);
modelRole(db);

// modelCharacter.hasMany(modelAbility);
// modelAbility.belongsTo(modelCharacter);

// modelCharacter.belongsToMany(modelRole, {through: "characterRole"});
// modelRole.belongsToMany(modelCharacter, {through: "characterRole"});



module.exports = {
   ...db.models,
   db,
   Op,
};
