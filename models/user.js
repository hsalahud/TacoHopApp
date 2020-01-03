module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model { }
  User.init(
    {
      // monthAndYear: {
      //   type: Sequelize.STRING,
      //   notNull: true
      // },
      firstName: {
        type: Sequelize.STRING,
        notNull: true
      },
      lastName: {
        type: Sequelize.STRING,
        notNull: true
      },
      email: {
        type: Sequelize.STRING,
        notNull: true
      },
      password: {
        type: Sequelize.STRING,
        notNull: true
      },
      meatPreference: {
        type: Sequelize.INTEGER,
        notNull: true
      },
      saucePreference: {
        type: Sequelize.INTEGER,
        notNull: true
      },
      flavorPreference: {
        type: Sequelize.INTEGER,
        notNull: true
      },
      tortillaPreference: {
        type: Sequelize.INTEGER,
        notNull: true
      }
    },
    {
      sequelize,
      modelName: 'user'
    }
  )

  return User
}