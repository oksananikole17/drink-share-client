
# DrinkShare Project

Description 

Welcome to my DrinkShare App! This application is designed to allow you to sign-up as a new user and then create new drinks you created with a Name, a Base Spirit and a Build(recipe). You can log out at any time and log back in when you'd like to revisit your drinks, or view anyone elses drinks that have been posted to the site!

Tech: HTML, CSS, JavaScript, Node.js,  Express.js, MongoDB, Mongoose, Bootstrap

API Repo Link: https://github.com/oksananikole17/drink-share-api

## Instructions

1. Fork and clone this repository.

2. Change into the new directory.

3. Create and checkout a new branch to make changes or edits to the code.

4. When finished, push to your fork and submit a pull request.

5. To simply use the app in the browser, visit https://oksananikole17.github.io/drink-share-client/.
   
## User Stories

* As a user I want to sign up so that I can have a valid sign in on this app.
* As a new user, I want to sign in so that I can start creating drinks on the app and view other peoples' creations as well.
* As a user, I want to be able easily store, update and delete the important details of my drinks like base and build.
* As a user, I want to be able to view all and search through all the drinks, and be able to navigate easily through the drinks based on base spirit. 

## Wireframe

(https://i.imgur.com/Ty1Y52o.jpg)

## Planning Story

Design ERD and Wire-frame

Create reminder routes of GET, POST, PATCH, DELETE

Created schema for "Drink" with the keys of name, build, and base.

## API Routes
HTTP Method	 --    URLPath	   --    Action	 --     CRUD

GET	    --         /drinks	  --     index or list    --	   Read

POST	    --        /drinks	  --    create	     --      Create

PATCH	    --      /drinks/:id	   --    update	  --     Update

DELETE	 --       /drinks/:id	--   destroy	  --    Delete

