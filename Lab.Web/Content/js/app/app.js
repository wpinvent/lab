define(['backbone', 'marionette'], function(Backbone, Marionette){
    var app = new Backbone.Marionette.Application();  

    app.addRegions({ main: "#main" });  
    
    return app;
});
