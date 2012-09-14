﻿define(['backbone','marionette', 'syphon', 'app/models/deck','app/views/decks/table','text!app/templates/decks/index.htm'], 
function(Backbone, Marionette, Syphon, Deck, DecksTableView, DecksIndexTemplate){

  var view = Backbone.Marionette.Layout.extend({
    className:'decks',
    template: DecksIndexTemplate,
    regions: {
      decks: '#decks' 
    },
    
    ui: { $form:'form' },

    events: {'submit form' : 'createDeck'},

    initialize:function(){
      this.bindViewEvents();
    },

    bindViewEvents: function(){
      var view = this;
      view.on('show', function(){
        view.decks.show( new DecksTableView({ collection:view.collection }) );
      });
    },

    createDeck:function(){
      var data = Backbone.Syphon.serialize(this);      
      this.collection.create(data, { wait:true });
      return false;
    }
  });

  return view;

});