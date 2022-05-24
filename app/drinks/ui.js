const store = require('../store.js')

const onNewDrinkSuccess = function (response) {
  $('form').trigger('reset')

  $('#create-display').html('<p>New Drink Created!</p>')
  $('#create-display').addClass('success')

  setTimeout(() => {
    $('#create-display').html('')
    $('#create-display').removeClass('success')
  }, 5000)

  store.drinks = response.drinks
}

const onNewDrinkFailure = function () {
  $('form').trigger('reset')
}

const onIndexDrinksSuccess = function (response) {
  const drinks = response.drinks
  // console.log(workoutsArray)

  // eslint-disable-next-line no-unused-vars
  let drinksHtml = ''

  // if (user._id == drinks.owner) {
  drinks.forEach((drinks) => {
    drinksHtml += `
                      <div id=${drinks._id}>
                        <ul>
                        <li>
                        <div> Drink Name: ${drinks.name}</div>
                        <div> Base: ${drinks.base}</div>
                        <div> Build: ${drinks.build} </div>
                        </li> 
                        </ul>
                        <form class="drinks-update-dynamic" data-id=${drinks._id}>
        <input type="text" name="drinks[name]" placeholder="New Name Here" required>
        <input type="text" name="drinks[base]" placeholder="Change Base" required>
        <input type="text" name="drinks[build]" placeholder="Update Recipe" required>
        <button class="drinks-update-btn" type="submit">Update Drink</button>
      </form>
      <button class="drinks-destroy-dynamic" data-id=${drinks._id}>Delete</button>
      <sec id="drink-update-success"></sec>
                        </div>
                    `
  })

  $('#index-drinks').html(drinksHtml)
}

const onDestroyDrinkSuccess = function (id) {
  const element = document.getElementById(id)
  element.parentNode.removeChild(element)

  $('#drink-update-success').html('Drink deleted!')

  $('#drink-update-success').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#drink-update-success').html('')
    $('#drink-update-success').removeClass('success')
  }, 6000)

  // reset all forms
  $('form').trigger('reset')
}

const onUpdateDrinkSuccess = function (id, data) {
  const element = document.getElementById(id)

  const drinkHtml = `
                      <div id=${id}>
                        <ul>
                        <li>
                        <div> Drink Name: ${data.drinks.name}</div>
                        <div> Date: ${data.drinks.base}</div>
                        <div> Time: ${data.drinks.build} </div>
                        </li> 
                        </ul>
                     <form class="drinks-update-dynamic" data-id=${id}>
        <input type="text" name="drinks[name]" placeholder="New Name Here" required>
        <input type="text" name="drinks[base]" placeholder="Change Base" required>
        <input type="text" name="drinks[build]" placeholder="Update Recipe" required>
        <button class="drinks-update-btn" type="submit">Update Drink</button>
      </form>
      <button class="drinks-destroy-dynamic" data-id=${id}>Delete</button>
      <sec id="drink-update-success"></sec>
                        </div>
                    `

  element.innerHTML = drinkHtml

  $('#drink-update-success').html('You successfully updated the drink!')

  // add class for success messaging
  $('#drink-update-success').addClass('success')

  // use setTimeout to allow the success message o stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#drink-update-success').html('')
    $('#drink-update-success').removeClass('success')
  }, 6000)

  // reset all forms
  $('form').trigger('reset')
}

export default {
  onNewDrinkSuccess,
  onNewDrinkFailure,
  onIndexDrinksSuccess,
  onDestroyDrinkSuccess,
  onUpdateDrinkSuccess
}
