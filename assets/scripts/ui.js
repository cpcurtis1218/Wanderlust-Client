'use strict'

// const store = require('./store')
const showDestinationsTemplate = require('./templates/destinations-listing.handlebars')

const resetMessage = function () {
  setTimeout(() => {
    $('#resource-message').text('')
  }, 2000)
}

const addLocationSuccess = () => {
  $('#resource-message').text('Location Added!')
  $('#add-location').trigger('reset')
  resetMessage()
}

const addLocationFailure = () => {
  $('#resource-message').text('Something went wrong.')
  $('#add-location').trigger('reset')
  resetMessage()
}

const indexLocationsSuccess = (responseData) => {
  $('#resource-message').text('Showing Index')
  const showDestinationsHtml = showDestinationsTemplate({ destinations: responseData.destinations })
  $('.content').html('').html(showDestinationsHtml)
  resetMessage()
}

const updateLocationsSuccess = (responseData) => {
  const showDestinationsHtml = showDestinationsTemplate({ destinations: responseData.destinations })
  $('.content').html('').html(showDestinationsHtml)
  resetMessage()
}

const indexLocationsFailure = (responseData) => {
  $('#resource-message').text('Something Went Wrong!')
  // console.log('error response data is ' + responseData)
  resetMessage()
}

const updateDestinationSuccess = () => {
  $('#resource-message').text('Update Successful!')
  resetMessage()
}

const updateDestinationFailure = (responseData) => {
  $('#resource-message').text('Something Went Wrong!')
  // console.log(responseData)
  resetMessage()
}

const deleteDestinationSuccess = () => {
  $('#resource-message').text('Delete Successful!')
}

const deleteDestinationFailure = (responseData) => {
  $('#resource-message').text('Something Went Wrong!')
  // console.log(responseData)
  resetMessage()
}

module.exports = {
  addLocationSuccess,
  addLocationFailure,
  indexLocationsSuccess,
  updateLocationsSuccess,
  indexLocationsFailure,
  updateDestinationSuccess,
  updateDestinationFailure,
  deleteDestinationSuccess,
  deleteDestinationFailure
}
