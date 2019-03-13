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

const signInSuccess = (responseData) => {
  $('#user-message').text('Successfully signed in!')
  $('.auth-form').trigger('reset')
  $('.unsecure').hide()
  $('.secure').show()
  // save the Token to the store
  store.user = responseData.user
  resetMessage()
}

const signInFailure = () => {
  $('#user-message').text('Sign in failed')
  $('.auth-form').trigger('reset')
  resetMessage()
}

const changePasswordSuccess = () => {
  $('#user-message').text('Password successfully changed!')
  $('.auth-form').trigger('reset')
  resetMessage()
}

const changePasswordFailure = () => {
  $('#user-message').text('Password change failed')
  $('.auth-form').trigger('reset')
  resetMessage()
}

const signOutSuccess = () => {
  $('#user-message').text('Successfully Signed Out!')
  // reset all form info
  $('form').trigger('reset')
  $('.unsecure').show()
  $('.secure').hide()
  // reset the store info
  store.user = null
  resetMessage()
}

const signOutFailure = () => {
  $('#user-message').text('Sign Out Failed')
  resetMessage()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
