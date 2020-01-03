module.exports = (sequelize, Sequelize) => {
  class Event extends Sequelize.Model { }
  Event.init(
    {
      // monthAndYear: {
      //   type: Sequelize.STRING,
      //   notNull: true
      // },
      eventName: {
        type: Sequelize.STRING,
        notNull: true
      },
      region: {
        type: Sequelize.STRING,
        notNull: true
      },
      eventDate: {
        type: Sequelize.DATE
      },
      eventDescription: {
        type: Sequelize.STRING
      }
    },
    {
      sequelize,
      modelName: 'event'
    }
  )

  return Event
}