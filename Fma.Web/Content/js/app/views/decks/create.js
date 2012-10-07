define(['backbone','marionette','text!app/templates/decks/create.htm'], 
function(Backbone, Marionette, ItemTemplate){
  
  var view = Backbone.Marionette.ItemView.extend({
    className: 'create-deck',
    template: ItemTemplate,

    events:{
      'click .cancel-button' : 'cancel',
      'click .save-button' : 'save'
    },

    initialize: function(){
      this.bindViewEvents();
    },

    bindViewEvents: function(){
      var view = this;
      view.on('show', function(){
      });
    },

    cancel: function(){
      
    },

    save: function(){

    }

  });

  return view;
});