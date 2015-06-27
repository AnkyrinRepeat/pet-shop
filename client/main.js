// Require language extensions BEFORE anything else
require('../ext')
var m = require('mithril')

var PetShopWindow = require('./components/PetShopWindow')
var SignInPanel = require('./components/SignInPanel')

m.mount(document.getElementById('app'), {
  view:function(){
  return m('.app', [
    m.component(SignInPanel),
    m.component(PetShopWindow)
    ])
  }
})
