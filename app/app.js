// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const drinkEvents = require('./drinks/events.js')
// const workoutEvents = require('./workouts/events.js')

$(() => {
  $('#home-page').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#new-drink-form').hide()
  $('#new-drink-form').on('submit', drinkEvents.onNewDrink)
})
