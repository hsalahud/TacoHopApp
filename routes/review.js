const db = require('../models')

module.exports = app => {
  app.get('/reviews', (req, res) => {
    db.Review.findAll()
      .then(reviews => res.json(reviews))
      .catch(e => console.log(e))
  })
  app.get('/reviews/:id', (req, res) => {
    db.Review.findAll({where: { id: req.params.id }})
      .then(review => res.json(review))
      .catch(e => console.log(e))
  })
  app.get('/reviews/:eventId/:placeId', (req, res) => {
    db.Review.findAll({where: { placeId: req.params.placeId, eventId: req.params.eventId }})
      .then(review => res.json(review))
      .catch(e => console.log(e))
  })
  app.get('/reviews/:eventId/:placeId/:eventParticipantId', (req, res) => {
    db.Review.findAll({where: { eventId: req.params.eventId, placeId: req.params.placeId, eventParticipantId: req.params.eventParticipantId }})
      .then(reviews => res.json(reviews))
      .catch(e => console.log(e))
  })
  app.post('/reviews', (req, res) => {
    db.Review.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.put('/reviews/:id', (req, res) => {
    db.Review.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.delete('/review/:id', (req, res) => {
    db.Review.destroy({ where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}