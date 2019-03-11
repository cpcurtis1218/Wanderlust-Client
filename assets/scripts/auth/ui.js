'use strict'

const store = require('../store.js')

const resetMessage = function () {
  setTimeout(() => {
    $('#user-message').text('Try Something New!')
  }, 3000)
}

const signUpSuccess = () => {
  $('#user-message').text('Successfully created an account!')
  $('.auth-form').trigger('reset')
  resetMessage()
}

const signUpFailure = () => {
  $('#user-message').text('Sign up failed')
  $('.auth-form').trigger('reset')
  resetMessage()
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
