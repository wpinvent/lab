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

require(function(require){

  var $ = require('jquery'),
      _ = require('underscore'),
      backbone = require('backbone'),
      marionette = require('marionette'),
      app = require('app/app'),
      router = require('app/router');

    // Bootstrap Marionette so that the template function will take a string input
    backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
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

    app.on("initialize:after", function(){    
      new router();
      backbone.history.start({silent:false});
    });

    app.start();

});