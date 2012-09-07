define(['backbone', 'marionette', 'app/controllers/controller'], function(Backbone, Marionette, Controller){

  var router = Backbone.Marionette.AppRouter.extend({
    controller: Controller,
    appRoutes:{
      media:'media',
      decks:'root',
      '':'root'
    }
  });

  return router;
});
