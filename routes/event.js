const db = require('../models')

module.exports = app => {
  app.get('/events', (req, res) => {
    db.Event.findAll()
      .then(events => res.json(events))
      .catch(e => console.log(e))
  })
  app.get('/events/:id', (req, res) => {
    db.Event.findAll({where: { id: req.params.id }})
      .then(event => res.json(event))
      .catch(e => console.log(e))
  })
  app.post('/events', (req, res) => {
    db.Event.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.put('/events/:id', (req, res) => {
    db.Event.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  app.delete('/events/:id', (req, res) => {
    db.Event.destroy({ where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}