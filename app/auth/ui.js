'use strict'

const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>Account Created!</p>')
  $('#auth-display').addClass('success')

  setTimeout(() => {
    $('#auth-display').html('')
    $('#auth-display').removeClass('success')
  }, 5000)

  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Fail</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-home').hide()
  $('form').trigger('reset')
  $('#sign-out').show()
  $('#home-page').show()
  $('#password').show()
  $('#new-drink-form').show()
  $('index-drinks').show()

  store.user = response.user

  return true
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Sign In Failed</p>')
  $('#auth-display').addClass('failure')

  setTimeout(() => {
    $('#auth-display').html('')
    $('#auth-display').removeClass('failure')
  }, 5000)

  $('form').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#pass-success').html('Password Changed!')

  $('#pass-success').addClass('success')

  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#pass-success').html('Password Change Failed')
}

const onSignOutSuccess = function () {
  $('#auth-home').show()
  $('#home-page').hide()
  $('#sign-out').hide()
  $('#show-all').hide()
  $('#password').hide()
  $('#new-drink-form').hide()
  $('#index-drinks').hide()
}

export default {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess
}
