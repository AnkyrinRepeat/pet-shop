// Require language extensions BEFORE anything else
require('../ext')
var m = require('mithril')

var PetShopWindow = require('./components/PetShopWindow')
// var PetSignUp = require('./components/PetShopWindow')

m.mount(document.getElementById('app'), PetShopWindow)
// m.mount(document.getElementById('app'), PetSignUp)
