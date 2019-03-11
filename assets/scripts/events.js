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

module.exports = {
  onAddLocation
}
