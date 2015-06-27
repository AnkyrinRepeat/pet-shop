var m = require('mithril');
var Shop = require('../models/shop');

var PetShopWindow = module.exports = {};

PetShopWindow.controller = function () {
  var ctrl = this;
  ctrl.Pleb = m.prop(true);
  ctrl.shop = m.prop(null);
  ctrl.pets = m.prop(null);
  ctrl.username = m.prop('');
  ctrl.password = m.prop('');

  Shop.fetch().then(ctrl.shop);
  Shop.petsFetch().then(ctrl.pets);


  ctrl.signup = function(e) {
    e.preventDefault();
    Shop.signUp({username:ctrl.username(), password:ctrl.password()});
  }

  ctrl.signin = function(e) {
    e.preventDefault();
    Shop.signIn({username:ctrl.username(), password:ctrl.password()}).then(ctrl.Pleb(false), ctrl.Pleb(true));
  }

  // ctrl.pets is our collection of pet models
  ctrl.like = function() {
    this.likes.push('apitoken');
  }
}

// PetSignUp.controller = function() {
//   // We want them to fill out a form
//   // When they fill the form, we want to
//   // take the value of their text, and
//   // POST it.  This is done for username and
//   // password.
//   // forms will use <input>, and we can grab
//   // the value inside of input class.
//   var ctrl = this;
//   ctrl.user = m.prop(null);
// }

PetShopWindow.view = function (ctrl) {
  return m('.pet-shop', [
    m('h1', "Welcome to " + ctrl.shop().name),
      !(ctrl.Pleb()) ?
        ctrl.pets().map(function(pet){
          return m('.pets', [
           m('div', "Pet name: " + pet.name),
           m('div', "Pet species: " + pet.species),
           m('img', {src: pet.imageUrl, style: {width: '300px'}}),
           m('div', pet.likes.length + " people like this wonderful pet!!!"),
           m('button', {onclick : ctrl.like.bind(pet)}, 'Like'),
           ])
        })
      : //ternary
          m('.sign-up'), [
          m('form', [
          m('input', {oninput: m.withAttr('value', ctrl.username)}),
          m('input', {oninput: m.withAttr('value', ctrl.password)}),
          m('button', {onclick: ctrl.signup}, 'Sign Up'),
          m('button', {onclick: ctrl.signin}, 'Sign In')
          ])
       ]
  ]);
}

// PetSignUp.view = function (ctrl) {
//   ]
// }



