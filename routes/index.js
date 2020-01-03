module.exports = app => {
  // require('./timeLog.js')(app)
  require('./event.js')(app)
  require('./place.js')(app)
  require('./user.js')(app)
  require('./eventParticipants.js')(app)
  require('./review.js')(app)
}
