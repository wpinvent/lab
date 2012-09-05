define(['backbone', 'marionette', 'app/controllers/controller'], function(Backbone, Marionette, Controller){

  var router = Backbone.Marionette.AppRouter.extend({
    controller: Controller,
    appRoutes:{
      '':'root'
    }
  });

  return router;
});
