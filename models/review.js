module.exports = (sequelize, Sequelize) => {
  class Review extends Sequelize.Model { }
  Review.init(
    {
      meatReview: {
        type: Sequelize.FLOAT,
        notNull: true
      },
      flavorReview: {
        type: Sequelize.FLOAT,
        notNull: true
      },
      sauceReview: {
        type: Sequelize.FLOAT,
        notNull: true
      },
      tortillaReview: {
        type: Sequelize.FLOAT,
        notNull: true
      },
      notes: {
        type: Sequelize.STRING,
      },
      overall: {
        type: Sequelize.FLOAT
      }
    },
    {
      sequelize,
      modelName: 'review'
    }
  )

  return Review
}