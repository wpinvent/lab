define(['backbone', 'marionette', 'app/controllers/cards'], function(Backbone, Marionette, CardsController){
  var router = Backbone.Marionette.AppRouter.extend({
    controller: CardsController,
    appRoutes:{      
      'cards/new':'create',
      'cards':'index'
    }
  });
  return router;
});


