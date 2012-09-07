requirejs.config({
  paths: {
    backbone:   'lib/backbone',
    marionette: 'lib/backbone.marionette',
    foundation: 'lib/foundation.min.js',
    jquery:     'lib/jquery',
    underscore: 'lib/underscore',
    moment:     'lib/moment',
    uploader:   'lib/fileuploader'
  },
  urlArgs: "bust=" +  (new Date()).getTime()
});

requirejs(['jquery', 'underscore', 'backbone', 'marionette', 'app/app', 'app/router'], function($, _, Backbone, Marionette, App, Router){

    // Bootstrap Marionette so that the template function will take a string input
    Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
      var template = templateId;

      if (!template || template.length === 0){
          var msg = "Could not find template: '" + templateId + "'";
          var err = new Error(msg);
          err.name = "NoTemplateError";
          throw err;
      }

      return template;
    }

    App.on("initialize:after", function(){    
      new Router();
      Backbone.history.start({silent:false});
    });

    App.start();

});



