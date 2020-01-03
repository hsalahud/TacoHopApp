module.exports = (sequelize, Sequelize) => {
  class EventParticipant extends Sequelize.Model { }
  EventParticipant.init(
    {
      isHost: {
        type: Sequelize.BOOLEAN,
        notNull: true
      }
    },
    {
      sequelize,
      modelName: 'eventParticipant'
    }
  )

  return EventParticipant
}