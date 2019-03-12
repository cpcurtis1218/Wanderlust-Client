'use strict'

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

module.exports = {
  addLocationSuccess,
  addLocationFailure
}
