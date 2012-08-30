requirejs.config({
  paths: {
    backbone:   'lib/backbone',
    marionette: 'lib/backbone.marionette',
    foundation: 'lib/foundation.min.js',
    jquery:     'lib/jquery',
    underscore: 'lib/underscore'
  },
  urlArgs: "bust=" +  (new Date()).getTime()
});

require(
  ['jquery', 'underscore', 'backbone', 'marionette', 'app/app', 'app/router'],
  function($, _, Backbone, Marionette, App, Router){

    // Bootstrap Marionette so that the template function will take a string input
    Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
        // Marionette expects "templateId" to be the ID of a DOM element.
        // But with RequireJS, templateId is actually the full text of the template.
        var template = templateId;

        // Make sure we have a template before trying to compile it
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


  }
);