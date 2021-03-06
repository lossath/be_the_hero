const express = require('express')

const ongController = require('./controllers/ongController')
const IncidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')


const routes = express.Router()

routes.post('/sessions', sessionController.create)

routes.get('/ongs', ongController.index) 
routes.post('/ongs', ongController.create) 

routes.get('/profile', profileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('incidents/:id', IncidentController.delete)
   

module.exports = routes