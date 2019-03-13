'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddLocation = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)

  api.addLocation(formData.location, formData.note, formData.contact)
    .then(ui.addLocationSuccess)
    .catch(ui.addLocationFailure)
}

const onIndexLocations = (event) => {
  event.preventDefault()

  api.indexLocations()
    .then(ui.indexLocationsSuccess)
    .catch(ui.indexLocationsFailure)
}

const onUpdateDestination = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const destinationData = formData.destination

  api.updateDestination(destinationData)
    .then(ui.updateDestinationSuccess)
    .catch(ui.updateDestinationFailure)
}

const addHandlers = () => {
  $('#content').on('submit', '.update-form', onUpdateDestination)
}

module.exports = {
  onAddLocation,
  onIndexLocations,
  addHandlers
}
