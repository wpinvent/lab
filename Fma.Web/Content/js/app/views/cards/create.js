﻿define(['backbone','marionette','syphon','app/data','app/models/card','text!app/templates/cards/create.htm'], 
function(Backbone, Marionette, Syphon, Data, Card, ItemTemplate){
  
  var view = Backbone.Marionette.ItemView.extend({
    className: 'create-card',
    template: ItemTemplate,

    events:{
      'click .save-button' : 'save'
    },

    initialize: function(){
      this.bindViewEvents();
    },

    bindViewEvents: function(){

    },

    save: function(){
      var data = Backbone.Syphon.serialize(this);
      Data.Cards.create(data, { wait:true });
      Backbone.history.navigate("cards", { trigger:true });
      return false;
    }

  });

  return view;
});