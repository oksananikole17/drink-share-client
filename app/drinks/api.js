'use strict'

const store = require('../store.js')
const config = require('./../config')

const newDrink = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/drinks',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const indexDrinks = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/drinks',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const destroyDrink = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/drinks/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateDrink = function (id, data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/drinks/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

module.exports = {
  newDrink,
  indexDrinks,
  destroyDrink,
  updateDrink
}
