const db = require('../models')

module.exports = app => {
  app.get('/places', (req, res) => {
    db.Place.findAll()
      .then(places => res.json(places))
      .catch(e => console.log(e))
  })
  app.get('/places/:eventId', (req, res) => {
    db.Place.findAll({where: { eventId: req.params.eventId }})
      .then(event => res.json(event))
      .catch(e => console.log(e))
  })
  app.get('/places/:eventId/:name', (req, res) => {
    db.Place.findAll({where: { name: req.params.name, eventId: req.params.eventId }})
      .then(eventByName => res.json(eventByName))
      .catch(e => console.log(e))
  })
  app.post('/places', (req, res) => {
    db.Place.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.put('/places/:id', (req, res) => {
    db.Place.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.delete('/places/:id', (req, res) => {
    db.Place.destroy({ where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}