define(['backbone', 'marionette', 'app/controllers/root'], function(Backbone, Marionette, RootController){
  var router = Backbone.Marionette.AppRouter.extend({
    controller: RootController,
    appRoutes:{      
      '':'root'
    }
  });
  return router;
});
