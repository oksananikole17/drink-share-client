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

const onIndexDrinks = function (event) {
  event.preventDefault()

  // api call
  drinksApi.indexDrinks().then(drinksUi.onIndexDrinksSuccess)
}

const onDynamicDestroyDrink = function (event) {
  // event.target is the delete button that was clicked on
  const deleteButton = event.target

  const id = $(deleteButton).data('id')

  // make API call for deleting one book with the data we grabbed from the form
  drinksApi.destroyDrink(id).then(drinksUi.onDestroyDrinkSuccess(id))
}

const onDynamicUpdateDrink = function (event) {
  event.preventDefault()

  const updateForm = event.target

  const id = $(updateForm).data('id')

  // create a javascript object from the form where the user entered the book
  // information
  const data = getFormFields(event.target)

  // make API call to update one book with the data we grabbed from the form
  drinksApi
    .updateDrink(id, data)
    .then(drinksUi.onUpdateDrinkSuccess(id, data))
}

const onIndexProfileDrinks = function (event) {
  event.preventDefault()

  // api call
  drinksApi.indexDrinks().then(drinksUi.onIndexProfileDrinksSuccess)
}

const onIndexVodkaDrinks = function (event) {
  event.preventDefault()

  // api call
  drinksApi.indexDrinks().then(drinksUi.onIndexVodkaDrinksSuccess)
}

const onIndexWhiskeyDrinks = function (event) {
  event.preventDefault()

  // api call
  drinksApi.indexDrinks().then(drinksUi.onIndexWhiskeyDrinksSuccess)
}

const onIndexTequilaDrinks = function (event) {
  event.preventDefault()

  // api call
  drinksApi.indexDrinks().then(drinksUi.onIndexTequilaDrinksSuccess)
}

const onIndexGinDrinks = function (event) {
  event.preventDefault()

  // api call
  drinksApi.indexDrinks().then(drinksUi.onIndexGinDrinksSuccess)
}

const onIndexRumDrinks = function (event) {
  event.preventDefault()

  // api call
  drinksApi.indexDrinks().then(drinksUi.onIndexRumDrinksSuccess)
}

const onIndexOtherDrinks = function (event) {
  event.preventDefault()

  // api call
  drinksApi.indexDrinks().then(drinksUi.onIndexOtherDrinksSuccess)
}

const searchbar = function () {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase()
  const x = document.getElementsByClassName('card-title')

  for (let i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = 'none'
    } else {
      x[i].style.display = 'list-item'
    }
  }
}

module.exports = {
  onNewDrink,
  onIndexDrinks,
  onDynamicDestroyDrink,
  onDynamicUpdateDrink,
  onIndexProfileDrinks,
  onIndexVodkaDrinks,
  onIndexGinDrinks,
  onIndexRumDrinks,
  onIndexTequilaDrinks,
  onIndexWhiskeyDrinks,
  onIndexOtherDrinks,
  searchbar
}
