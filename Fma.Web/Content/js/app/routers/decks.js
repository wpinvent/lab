define(['backbone', 'marionette', 'app/controllers/decks'], function(Backbone, Marionette, DecksController){
  var router = Backbone.Marionette.AppRouter.extend({
    controller: DecksController,
    appRoutes:{      
      'decks/:id/edit':'edit',
      'decks/new':'create',
      'decks':'index'
    }
  });
  return router;
});


