const store = require('../store.js')

const onNewDrinkSuccess = function (response) {
  $('form').trigger('reset')

  store.drinks = response.drinks
}

const onNewDrinkFailure = function () {
  $('form').trigger('reset')
}

export default {
  onNewDrinkSuccess,
  onNewDrinkFailure
}
