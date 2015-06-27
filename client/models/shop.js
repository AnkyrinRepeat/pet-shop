var m = require('mithril')


var Shop = module.exports = {};

Shop.fetch = function () {
  return m.request({ method: 'GET', url: 'http://pet-shop.api.mks.io/shops/1' })
}

Shop.petsFetch = function() {
  return m.request({ method: 'GET', url: 'http://pet-shop.api.mks.io/shops/1/pets' })
}

Shop.signIn = function(login) {
  return m.request({ method: 'POST', url: 'http://pet-shop.api.mks.io/signin', data : login})
}

Shop.signUp = function(login) {
  return m.request({ method: 'POST', url: 'http://pet-shop.api.mks.io/signup', data : login})
}



