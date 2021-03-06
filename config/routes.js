/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'pages/index'
  },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝



  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝

  // custom routes
  

  // product routes
  'POST /products' : 'ProductController.create',
  'GET /products' : 'ProductController.find',
  'PUT /products/:id' : 'ProductController.update',
  'DELETE /products/:id' : 'ProductController.delete',
  'GET /products/:id' : 'ProductController.show',

  // users routes
  'POST /users' : 'UserController.create',
  'GET /users' : 'UserController.find',
  'PUT /users/:id' : 'UserController.update',
  'DELETE /users/:id' : 'UserController.delete',
  'GET /users/:id' : 'UserController.show',

  // userProfile routes
  'POST /profiles' : 'UserProfileController.create',
  'GET /profiles' : 'UserProfileController.find',
  'PUT /profiles/:id' : 'UserProfileController.update',
  'DELETE /profiles/:id' : 'UserProfileController.delete',
  'GET /profiles/:id' : 'UserProfileController.show',

  'POST /profiles/upload' : 'UserProfileController.upload',


  // tasks routes
  'POST /tasks' : 'TaskController.create',
  'GET /tasks' : 'TaskController.find',
  'PUT /tasks/:id' : 'TaskController.update',
  'DELETE /tasks/:id' : 'TaskController.delete',
  'GET /tasks/:id' : 'TaskController.show',


  // Auth
  // 'GET /login': {
  //   controller: 'AuthController',
  //   action: 'login'
  // },
  'POST /login': {
    controller: 'AuthController',
    action: 'login'
  },
  'POST /register': {
    controller: 'AuthController',
    action: 'register'
  },
  'GET /logout': {
    controller: 'AuthController',
    action: 'logout'
  }

};


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTM4MTM4MzY4LCJleHAiOjE1MzgxNDkxNjh9.z4hmdJrI1Oa9JtFVc2rO-yxrtJkyFIMEEh5vyBAvA5A