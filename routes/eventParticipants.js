const db = require('../models')

module.exports = app => {
  app.get('/eventparticipants', (req, res) => {
    db.EventParticipant.findAll()
      .then(eventParticipants => res.json(eventParticipants))
      .catch(e => console.log(e))
  })
  app.get('/eventparticipants/:eventId', (req, res) => {
    db.EventParticipant.findAll({where: { eventId: req.params.eventId }})
      .then(eventParticipants => res.json(eventParticipants))
      .catch(e => console.log(e))
  })
  app.get('/eventparticipants/:eventId/:id', (req, res) => {
    db.EventParticipant.findAll({where: { id: req.params.id, eventId: req.params.eventId }})
      .then(eventParticipant => res.json(eventParticipant))
      .catch(e => console.log(e))
  })
  app.post('/eventparticipants', (req, res) => {
    db.EventParticipant.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.put('/eventparticipants/:id', (req, res) => {
    db.EventParticipant.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.delete('/eventparticipants/:id', (req, res) => {
    db.EventParticipant.destroy({ where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}