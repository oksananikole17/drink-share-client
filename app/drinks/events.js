'use strict'

const drinksApi = require('./api.js')
const drinksUi = require('./ui.js').default
const getFormFields = require('../../lib/get-form-fields.js')

const onNewDrink = function (event) {
  event.preventDefault()

  // get data from form
  const form = event.target
  const data = getFormFields(form)

  drinksApi
    .newDrink(data)
    .then((response) => drinksUi.onNewDrinkSuccess(response))
    .catch(() => drinksUi.onNewDrinkFailure())
}

module.exports = {
  onNewDrink
}
