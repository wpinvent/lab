define(['backbone', 'marionette', 'app/controllers/media'], function(Backbone, Marionette, MediaController){
  var router = Backbone.Marionette.AppRouter.extend({
    controller: MediaController,
    appRoutes:{      
      'media':'index'
    }
  });
  return router;
});


