'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onIndexLocations = (event) => {
  if (event) { event.preventDefault() }

  api.indexLocations()
    .then(ui.indexLocationsSuccess)
    .catch(ui.indexLocationsFailure)
}

const onAddLocation = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.addLocation(formData.location, formData.note, formData.contact)
    .then(ui.addLocationSuccess)
    .then(onIndexLocations)
    .catch(ui.addLocationFailure)
}

const onUpdateDestination = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const destinationData = formData.destination

  api.updateDestination(destinationData)
    .then(ui.updateDestinationSuccess)
    .then(onIndexLocations)
    .catch(ui.updateDestinationFailure)
}

const onDeleteDestination = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const destinationData = formData.destination

  api.deleteDestination(destinationData)
    .then(ui.deleteDestinationSuccess)
    .then(onIndexLocations)
    .catch(ui.deleteDestinationFailure)
}

const addHandlers = () => {
  $('#content').on('submit', '.update-form', onUpdateDestination)
  $('#content').on('submit', '.delete-form', onDeleteDestination)
}

module.exports = {
  onAddLocation,
  onIndexLocations,
  addHandlers
}
