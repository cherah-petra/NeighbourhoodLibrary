const Participants = require('./Participants');
const Books = require('./Books');



// participants.hasMany(Books, {
//   foreignKey: 'bookOwner',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { Participants, Books };
