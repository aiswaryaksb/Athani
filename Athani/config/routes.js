/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  '/home': 'HomeController.index',
  '/home/admin_login' : 'HomeController.adminlogin',

  '/home/Maternal_Health' :'MaternalController.maternal',
  '/home/Maternal_Health/Donate' :'MaternalController.donate',
  '/home/Maternal_Health/Donate/create' :'MaternalController.create',
  '/home/Maternal_Health/Donate/Donation_Response' : 'MaternalController.response',
  '/home/Maternal_Health/Get_Involved' :'MaternalController.involved',
  '/home/Maternal_Health/Get_Involved/volunteer' : 'MaternalController.volunteer',
  '/home/Maternal_Health/Get_Involved/host': 'MaternalController.host',
  '/home/Maternal_Health/Get_Involved/signin' :'MaternalController.signin',
  '/home/Maternal_Health/Get_Involved/signin/process_signin': 'MaternalController.processSignin',
  '/home/Maternal_Health/Get_Involved/login': 'MaternalController.login',
  '/home/Maternal_Health/Get_Involved/login/create1' : 'MaternalController.create1',
   // '/home/Maternal_Health/Get_Involved/'
  '/home/Maternal_Health/Contact' :'MaternalController.contact',

  '/home/Child_Survival' :'ChildController.child',
  '/home/Child_Survival/Donate' :'ChildController.donate1',
  '/home/Child_Survival/Donate/create' :'ChildController.create1',
  '/home/Child_Survival/Get_Involved' :'ChildController.involved1',
  '/home/Child_Survival/Get_Involved/volunteer' : 'ChildController.volunteer1',
  '/home/Child_Survival/Get_Involved/host': 'ChildController.host1',
  '/home/Child_Survival/Get_Involved/signin' :'ChildController.signin1',
  '/home/Child_Survival/Get_Involved/signin/process_signin' :'ChildController.processSignin1',
  '/home/Child_Survival/Get_Involved/login' :'ChildController.login1',
  '/home/Child_Survival/Get_Involved/login/create1' :'ChildController.create11',
  '/home/Child_Survival/Contact' :'ChildController.contact',

  '/home/WomenandChild' :'WcController.family',
  '/home/WomenandChild/Donate' :'WcController.donate2',
  '/home/WomenandChild/Donate/create' :'WcController.create2',
  '/home/WomenandChild/Get_Involved' :'WcController.involved2',
  '/home/WomenandChild/Get_Involved/volunteer' : 'WcController.volunteer2',
  '/home/WomenandChild/Get_Involved/host': 'WcController.host2',
  '/home/WomenandChild/Get_Involved/signin' :'WcController.signin2',
  '/home/WomenandChild/Get_Involved/signin/process_signin' :'WcController.processSignin2',
  '/home/WomenandChild/Get_Involved/login' :'WcController.login2',
  '/home/WomenandChild/Get_Involved/login/create1' :'WcController.create12',
  '/home/WomenandChild/Contact' :'WcController.contact'




  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
