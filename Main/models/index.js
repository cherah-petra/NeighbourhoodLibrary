const Participants = require('./Participants');
const Books = require('./books');



// participants.hasMany(Books, {
//   foreignKey: 'bookOwner',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { Participants, Books };
