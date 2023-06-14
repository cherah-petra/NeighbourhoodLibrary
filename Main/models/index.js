const Participants = require('./Participants');
const Project = require('./Project');

// participants.hasMany(Books, {
//   foreignKey: 'bookOwner',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { Participants };
