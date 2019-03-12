'use strict'

const store = require('./store')

const resetMessage = function () {
  setTimeout(() => {
    $('#resource-message').text('Click Something Else!')
  }, 5000)
}

const addLocationSuccess = () => {
  $('#resource-message').text('Location Added!')
  resetMessage()
}

const addLocationFailure = () => {
  $('#resource-message').text('Something went wrong.')
  resetMessage()
}

const indexLocationsSuccess = (responseData) => {
  $('#resource-message').text('Showing Index')
  store.destinations = responseData.destinations
  console.log(store.destinations)
  resetMessage()
}

const indexLocationsFailure = (responseData) => {
  $('#resource-message').text('Something Went Wrong!')
  console.log('error response data is ' + responseData)
  resetMessage()
}

module.exports = {
  addLocationSuccess,
  addLocationFailure,
  indexLocationsSuccess,
  indexLocationsFailure
}
