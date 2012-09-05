define(function(require){
  var backbone = require('backbone'),
      marionette = require('marionette'),
      app = new Backbone.Marionette.Application();
  
    app.addRegions({ 
      content: "#app"
    });  

    return app;
  }
);
