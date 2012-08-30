define(
['backbone','marionette','app/controller'],
function(Backbone, Marionette, Controller){  
  return Backbone.Marionette.AppRouter.extend({
    controller: Controller,
    appRoutes:{
      '':'root'
    }
  });
});