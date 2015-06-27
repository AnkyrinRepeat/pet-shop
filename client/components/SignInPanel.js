var m = require ('mithril');
var SignIn = require ('../models/SignIn');
var SignInPanel = module.exports = {};

SignInPanel.controller = function() {
  var ctrl = this;
  ctrl.username = m.prop('');
  ctrl.password = m.prop('');

  ctrl.signUp = function(e) {
    e.preventDefault();
    SignIn.signUp({username:ctrl.username(), password:ctrl.password()});
  };

  ctrl.signIn = function(e) {
    e.preventDefault();
    SignIn.signIn({username:ctrl.username(), password:ctrl.password()})
  };
};

SignInPanel.view = function(ctrl) {

  return m('.sign-up', [
    m('form', [
    m('input', {oninput: m.withAttr('value', ctrl.username)}),
    m('input', {oninput: m.withAttr('value', ctrl.password)}),
    m('button', {onclick: ctrl.signUp}, 'Sign Up'),
    m('button', {onclick: ctrl.signIn}, 'Sign In')
    ])
  ]);
};
