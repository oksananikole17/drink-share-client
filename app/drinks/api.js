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

module.exports = {
  newDrink
}
