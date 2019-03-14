'use strict'

const store = require('../store.js')

const resetMessage = function () {
  setTimeout(() => {
    $('#user-message').text('')
  }, 3000)
}

const signUpSuccess = () => {
  $('#user-message').text(`You've created an account!`)
  $('.auth-form').trigger('reset')
  resetMessage()
}

const signUpFailure = () => {
  $('#user-message').text('Sign up failed.')
  $('.auth-form').trigger('reset')
  resetMessage()
}

const signInSuccess = (responseData) => {
  $('#user-message').text(`You've signed in!`)
  $('.auth-form').trigger('reset')
  // hide sign in and sign up
  $('.unsecure').hide()
  // show change-pw and sign out
  $('.secure').show()
  // show destination info
  $('.destinations').show()
  // save the Token to the store
  store.user = responseData.user
  resetMessage()
}

const signInFailure = () => {
  $('#user-message').text('Sign in failed.')
  $('.auth-form').trigger('reset')
  resetMessage()
}

const changePasswordSuccess = () => {
  $('#user-message').text(`You've changed passwords!`)
  $('.auth-form').trigger('reset')
  resetMessage()
}

const changePasswordFailure = () => {
  $('#user-message').text('Password change failed.')
  $('.auth-form').trigger('reset')
  resetMessage()
}

const signOutSuccess = () => {
  $('#user-message').text(`You've signed out!`)
  // reset all form info
  $('form').trigger('reset')
  // show sign in and sign up
  $('.unsecure').show()
  // hide change pw and sign out
  $('.secure').hide()
  // hide destinations
  $('.destinations').hide()
  // clear destination index container
  $('.content').html('')
  // reset the store info
  store.user = null
  resetMessage()
}

const signOutFailure = () => {
  $('#user-message').text('Sign out failed.')
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
