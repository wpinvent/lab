define(['jquery', 'jqueryui', 'datepicker', 'backbone','marionette','app/data','text!app/templates/decks/create.htm'], 
function($, ui, datepicker, Backbone, Marionette, Data, ItemTemplate){
  
  var view = Backbone.Marionette.ItemView.extend({
    className: 'create-deck',
    template: ItemTemplate,

    events:{
      'click .save-button' : 'save'
    },

    initialize: function(){
      this.bindViewEvents();
    },

    bindViewEvents: function(){
      var view = this;
      view.on('show', function(){
        $('input[data-datepicker]').datepicker({
          changeMonth:true,
          changeYear:true
        })
      });      
    },

    save: function(){
      var data = Backbone.Syphon.serialize(this);
      Data.Decks.create(data, { wait:true });
      Backbone.history.navigate("decks", { trigger:true });
      return false;
    }

  });

  return view;
});