const store = require('../store.js')

const onNewDrinkSuccess = function (response) {
  $('form').trigger('reset')

  $('#create-display').html('<p>New Drink Created!</p>')
  $('#create-display').addClass('success')

  setTimeout(() => {
    $('#create-display').html('')
    $('#create-display').removeClass('success')
  }, 5000)
  const element = document.getElementById('index-drinks')
  const drink = response.drink

  const drinksHtml = `<sec class="main-card">
         <div class="card text-white bg-dark mb-3 w-60" style="max-width: 55rem;" id=${drink._id}>
         <div class="card-header">${drink.base}</div>
         <div class="card-body">
        <h5 class="card-title">${drink.name}</h5>
        <p class="card-text">${drink.build}</p>
        </div>  
          </div>
          </sec>`

  element.innerHTML += drinksHtml
  store.drinks = response.drink
}

const onNewDrinkFailure = function () {
  $('form').trigger('reset')
}

const onIndexDrinksSuccess = function (response) {
  const drinks = response.drinks

  // eslint-disable-next-line no-unused-vars
  let drinksHtml = ''

  drinks.forEach((drinks) => {
    drinksHtml += `
    <sec class="main-card">
         <div class="card text-white bg-dark mb-3 w-60" style="max-width: 55rem;" id=${drinks._id}>
         <div class="card-header">${drinks.base}</div>
         <div class="card-body">
        <h5 class="card-title">${drinks.name}</h5>
        <p class="card-text">${drinks.build}</p>
        </div>  
          </div>
          </sec>
                    `
  })

  $('#index-drinks').html(drinksHtml)
  $('#new-drink-form').show()
  $('#index-drinks').show()
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
         <div class="card-header" >${data.drinks.base}</div>
         <div class="card-body" >
         <h5 class="card-title">${data.drinks.name}</h5>
        <p class="card-text">${data.drinks.build}</p>
       <form class="drinks-update-dynamic" data-id=${id}>
        <input type="text" name="drinks[name]" placeholder="New Name Here" style="width:400px; margin:10px;" required>
        <label for="exampleFormControlSelect1"></label>
          <select class="form-control" name="drinks[base]" type="text" style="width:400px; margin-left:8px;">
            <option>Vodka</option>
            <option>Gin</option>
            <option>Mezcal/Tequila</option>
            <option>Rum</option>
            <option>Whiskey</option>
            <option>Liqueur/Cordial</option>
          </select>
        <textarea type="text" name="drinks[build]" placeholder="Update Recipe" rows="3" style="width:400px; margin:10px;" required></textarea>
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

const onIndexProfileDrinksSuccess = function (response) {
  const drinks = response.drinks
  const newArr = []

  for (let i = 0; i < drinks.length; i++) {
    // eslint-disable-next-line eqeqeq
    if (store.user._id === drinks[i].owner) {
      newArr.push(drinks[i])
    }
  }
  // eslint-disable-next-line no-unused-vars
  let drinksHtml = ''

  // for (let i = 0; i < drinks.length; i++) {
  //   // eslint-disable-next-line eqeqeq
  //   if (store.user._id === drinks[i].owner) {
  newArr.forEach((drinks) => {
    drinksHtml += `
                      <div class="card text-white bg-dark mb-3 w-60" style="max-width: 55rem;" id=${drinks._id}>
         <div class="card-header">${drinks.base}</div>
         <div class="card-body">
         <h5 class="card-title">${drinks.name}</h5>
        <p class="card-text">${drinks.build}</p>
        </div>  
                     <form class="drinks-update-dynamic" data-id=${drinks._id}>
        <input type="text" name="drinks[name]" placeholder="New Name Here" style="width:400px; margin:10px;" required>
        <label for="exampleFormControlSelect1"></label>
          <select class="form-control" name="drinks[base]" type="text" style="width:400px; margin-left:8px;">
            <option>Vodka</option>
            <option>Gin</option>
            <option>Mezcal/Tequila</option>
            <option>Rum</option>
            <option>Whiskey</option>
            <option>Liqueur/Cordial</option>
          </select>
        <textarea type="text" name="drinks[build]" placeholder="Update Recipe" rows="3" style="width:400px; margin:10px;" required></textarea>
        <button class="drinks-update-btn" type="submit">Update Drink</button>
      </form>
      <button class="drinks-destroy-dynamic" data-id=${drinks._id}>Delete</button>
      <sec id="drink-update-success"></sec>
                        </div>
                    `
  })

  $('#index-drinks').html(drinksHtml)
  $('#new-drink-form').hide()
}

const onIndexVodkaDrinksSuccess = function (response) {
  const drinks = response.drinks
  console.log(drinks)

  const newArr = []

  for (let i = 0; i < drinks.length; i++) {
    // eslint-disable-next-line eqeqeq
    if (drinks[i].base == 'Vodka') {
      newArr.push(drinks[i])
    }
  }
  // eslint-disable-next-line no-unused-vars
  let drinksHtml = ''

  newArr.forEach((drinks) => {
    drinksHtml += `
         <div class="card text-white bg-dark mb-3 w-60" style="max-width: 55rem;" id=${drinks._id}>
         <div class="card-header">${drinks.base}</div>
         <div class="card-body">
         <h5 class="card-title">${drinks.name}</h5>
        <p class="card-text">${drinks.build}</p>
        </div>  
          </div>
                    `
  })
  $('#new-drink-form').hide()
  $('#index-drinks').html(drinksHtml)
}

const onIndexWhiskeyDrinksSuccess = function (response) {
  const drinks = response.drinks
  console.log(drinks)

  const newArr = []

  for (let i = 0; i < drinks.length; i++) {
    // eslint-disable-next-line eqeqeq
    if (drinks[i].base == 'Whiskey') {
      newArr.push(drinks[i])
    }
  }
  // eslint-disable-next-line no-unused-vars
  let drinksHtml = ''

  newArr.forEach((drinks) => {
    drinksHtml += `
         <div class="card text-white bg-dark mb-3 w-60" style="max-width: 55rem;" id=${drinks._id}>
         <div class="card-header">${drinks.base}</div>
         <div class="card-body">
         <h5 class="card-title">${drinks.name}</h5>
        <p class="card-text">${drinks.build}</p>
        </div>  
          </div>
                    `
  })
  $('#new-drink-form').hide()
  $('#index-drinks').html(drinksHtml)
}

const onIndexGinDrinksSuccess = function (response) {
  const drinks = response.drinks
  console.log(drinks)

  const newArr = []

  for (let i = 0; i < drinks.length; i++) {
    // eslint-disable-next-line eqeqeq
    if (drinks[i].base == 'Gin') {
      newArr.push(drinks[i])
    }
  }
  // eslint-disable-next-line no-unused-vars
  let drinksHtml = ''

  newArr.forEach((drinks) => {
    drinksHtml += `
         <div class="card text-white bg-dark mb-3 w-60" style="max-width: 55rem;" id=${drinks._id}>
         <div class="card-header">${drinks.base}</div>
         <div class="card-body">
         <h5 class="card-title">${drinks.name}</h5>
        <p class="card-text">${drinks.build}</p>
        </div>  
          </div>
                    `
  })
  $('#new-drink-form').hide()
  $('#index-drinks').html(drinksHtml)
}

const onIndexTequilaDrinksSuccess = function (response) {
  const drinks = response.drinks
  console.log(drinks)

  const newArr = []

  for (let i = 0; i < drinks.length; i++) {
    // eslint-disable-next-line eqeqeq
    if (drinks[i].base == 'Mezcal/Tequila') {
      newArr.push(drinks[i])
    }
  }
  // eslint-disable-next-line no-unused-vars
  let drinksHtml = ''

  newArr.forEach((drinks) => {
    drinksHtml += `
         <div class="card text-white bg-dark mb-3 w-60" style="max-width: 55rem;" id=${drinks._id}>
         <div class="card-header">${drinks.base}</div>
         <div class="card-body">
         <h5 class="card-title">${drinks.name}</h5>
        <p class="card-text">${drinks.build}</p>
        </div>  
          </div>
                    `
  })
  $('#new-drink-form').hide()
  $('#index-drinks').html(drinksHtml)
}

const onIndexRumDrinksSuccess = function (response) {
  const drinks = response.drinks
  console.log(drinks)

  const newArr = []

  for (let i = 0; i < drinks.length; i++) {
    // eslint-disable-next-line eqeqeq
    if (drinks[i].base == 'Rum') {
      newArr.push(drinks[i])
    }
  }
  // eslint-disable-next-line no-unused-vars
  let drinksHtml = ''

  newArr.forEach((drinks) => {
    drinksHtml += `
         <div class="card text-white bg-dark mb-3 w-60" style="max-width: 55rem;" id=${drinks._id}>
         <div class="card-header">${drinks.base}</div>
         <div class="card-body">
         <h5 class="card-title">${drinks.name}</h5>
        <p class="card-text">${drinks.build}</p>
        </div>  
          </div>
                    `
  })
  $('#new-drink-form').hide()
  $('#index-drinks').html(drinksHtml)
}

const onIndexOtherDrinksSuccess = function (response) {
  const drinks = response.drinks
  console.log(drinks)

  const newArr = []

  for (let i = 0; i < drinks.length; i++) {
    // eslint-disable-next-line eqeqeq
    if (drinks[i].base == 'Liqueur/Cordial') {
      newArr.push(drinks[i])
    }
  }
  // eslint-disable-next-line no-unused-vars
  let drinksHtml = ''

  newArr.forEach((drinks) => {
    drinksHtml += `
         <div class="card text-white bg-dark mb-3 w-60" style="max-width: 55rem;" id=${drinks._id}>
         <div class="card-header">${drinks.base}</div>
         <div class="card-body">
         <h5 class="card-title">${drinks.name}</h5>
        <p class="card-text">${drinks.build}</p>
        </div>  
          </div>
                    `
  })
  $('#new-drink-form').hide()
  $('#index-drinks').html(drinksHtml)
}
export default {
  onNewDrinkSuccess,
  onNewDrinkFailure,
  onIndexDrinksSuccess,
  onDestroyDrinkSuccess,
  onUpdateDrinkSuccess,
  onIndexProfileDrinksSuccess,
  onIndexVodkaDrinksSuccess,
  onIndexGinDrinksSuccess,
  onIndexWhiskeyDrinksSuccess,
  onIndexRumDrinksSuccess,
  onIndexTequilaDrinksSuccess,
  onIndexOtherDrinksSuccess
}
