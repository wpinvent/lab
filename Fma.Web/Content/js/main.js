requirejs.config({
  paths: {
    backbone:   'lib/backbone',
    marionette: 'lib/backbone.marionette',
    syphon:     'lib/backbone.syphon',
    foundation: 'lib/foundation.min',
    jquery:     'lib/jquery',
    underscore: 'lib/underscore',
    moment:     'lib/moment',
    uploader:   'lib/fileuploader',
    jqueryui:   'lib/jquery.ui.core',
    datepicker: 'lib/jquery.ui.datepicker',
    validation: 'lib/backbone.validation',
    validate: 'lib/backbone.validation.bootstrap'
  },
  urlArgs: "bust=" +  (new Date()).getTime()
});

requirejs(['jquery', 'underscore', 'backbone', 'marionette', 'app/app', 'app/routers/initializer', 'app/views/shared/reveal'], function($, _, Backbone, Marionette, App, RouteInitializer, RevealView){

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


    var modal = new RevealView({ el: $('#modal') });

    App.on("initialize:after", function(){    
      RouteInitializer.initialize();
      Backbone.history.start( { silent:false } );
    });

    App.on("modal:show", function( contentView ){
      modal.reveal( contentView );
    });

    App.on("modal:close", function(){
      modal.hide();
    });

    App.on("nav:changed", function(which){
      var $active = $('#nav .active'), $next;
      
      switch(which){
        case 'decks': $next = $('.decks-nav'); break;
        case 'cards': $next = $('.cards-nav'); break;
        case 'media': $next = $('.media-nav'); break;
      }
      
      if ($active.length && !$next.is('.active'))
          $active.removeClass('active');
      
      $next.addClass('active');
    });

    App.start();
});



