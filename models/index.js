const Sequelize = require('sequelize')
const sequelize = require('../config')

let Event = require('./event.js')(sequelize, Sequelize)
let Place = require('./place.js')(sequelize, Sequelize)
let User = require('./user.js')(sequelize, Sequelize)
let EventParticipant = require('./eventParticipant.js')(sequelize, Sequelize)
let Review = require('./review.js')(sequelize,Sequelize)

User.hasMany(Event)
User.hasMany(EventParticipant)

EventParticipant.belongsTo(User, {
  as: 'userGroup',
  foreignKey: 'userId'
})
EventParticipant.belongsTo(Event, {
  as: 'eventMain',
  foreignKey: 'eventId'
})

Event.belongsTo(User)
Event.hasMany(Place)
Event.hasMany(EventParticipant)
Event.hasMany(Review)

Place.belongsTo(Event)

Place.hasMany(Review)
Review.belongsTo(Place, {
  as: 'placeReview',
  foreignKey: 'placeId'
})

Review.belongsTo(Place, {
  as: 'eventReview',
  foreignKey: 'eventId'
})

EventParticipant.hasMany(Review)
Review.belongsTo(EventParticipant)

module.exports = {
  User,
  Event,
  Place,
  EventParticipant,
  Review
}
