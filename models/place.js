module.exports = (sequelize, Sequelize) => {
  class Place extends Sequelize.Model { }
  Place.init(
    {
      // monthAndYear: {
      //   type: Sequelize.STRING,
      //   notNull: true
      // },
      name: {
        type: Sequelize.STRING,
        notNull: true
      },
      url: {
        type: Sequelize.STRING,
        notNull: true
      },
      rating: {
        type: Sequelize.FLOAT,
        notNull: true
      },
      address: {
        type: Sequelize.STRING,
        notNull: true
      },
      phone: {
        type: Sequelize.STRING,
        notNull: true
      }
    },
    {
      sequelize,
      modelName: 'place'
    }
  )

  return Place
}