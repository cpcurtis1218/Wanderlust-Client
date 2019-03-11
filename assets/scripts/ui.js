'use strict'

const resetMessage = function () {
  setTimeout(() => {
    $('#user-message').text('Try Something New!')
  }, 3000)
}

const addLocationSuccess = () => {
  $('#user-message').text('Location Added!')
  resetMessage()
}

const addLocationFailure = () => {
  $('#user-message').text('Something went wrong.')
  resetMessage()
}

module.exports = {
  addLocationSuccess,
  addLocationFailure
}
