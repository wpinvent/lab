define(
  ['backbone','marionette'], 
  function(Backbone, Marionette, Router){

    var App = new Backbone.Marionette.Application();
  
    App.addRegions({ 
      content: "#app"
    });  

    return App;
  }
);
