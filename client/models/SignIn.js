var m = require('mithril');
var SignIn = module.exports = {};

SignIn.token = null;
SignIn.user = null;


SignIn.signIn = function(login) {
  return m.request({ method: 'POST', url: 'http://pet-shop.api.mks.io/signin', data : login})
  .then(function(response){
    SignIn.token = response.token;
    SignIn.user = response.user;
  })
}

SignIn.signUp = function(login) {
  return m.request({ method: 'POST', url: 'http://pet-shop.api.mks.io/signup', data : login})
}
