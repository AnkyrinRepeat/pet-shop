var m = require('mithril');
var Shop = require('../models/shop');
var SignIn = require('../models/SignIn')

var PetShopWindow = module.exports = {};

PetShopWindow.controller = function () {
  var ctrl = this;
  ctrl.shop = m.prop(null);
  ctrl.pets = m.prop(null);

  Shop.fetch().then(ctrl.shop);
  Shop.petsFetch().then(ctrl.pets);


  // ctrl.pets is our collection of pet models
  ctrl.like = function() {
    this.likes.push('apitoken');
  }
}


PetShopWindow.view = function (ctrl) {
  return m('.pet-shop', [
    m('h1', "Welcome to " + ctrl.shop().name),
        ctrl.pets().map(function(pet){
          return m('.pets', [
           m('div', "Pet name: " + pet.name),
           m('div', "Pet species: " + pet.species),
           m('img', {src: pet.imageUrl, style: {width: '300px'}}),
           m('div', pet.likes.length + " people like this wonderful pet!!!"),
           m('button', {onclick : ctrl.like.bind(pet)}, 'Like'),
           ])
        })
  ]);
}



