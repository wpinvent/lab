define(['jquery', 'jqueryui', 'datepicker', 'backbone','marionette', 'text!app/templates/decks/create.htm'], 
function($, ui, datepicker, Backbone, Marionette, ItemTemplate){
  
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

    }

  });

  return view;
});