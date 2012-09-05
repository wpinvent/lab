define(function(require){
  var backbone = require('backbone'),
      marionette = require('marionette'),
      controller = require('app/controller');

  return Backbone.Marionette.AppRouter.extend({
    controller: controller,
    appRoutes:{
      '':'root'
    }
  });
});
