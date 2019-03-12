'use strict'

const store = require('./store')

const resetMessage = function () {
  setTimeout(() => {
    $('#resource-message').text('Click Something Else!')
  }, 5000)
}

const logStore = () => {
  console.log(store)
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
  logStore,
  addLocationSuccess,
  addLocationFailure
}
