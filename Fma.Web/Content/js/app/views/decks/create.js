define(['jquery', 'jqueryui', 'datepicker', 'backbone','marionette','app/data','app/models/deck','text!app/templates/decks/create.htm'], 
function($, ui, datepicker, Backbone, Marionette, Data, Deck, ItemTemplate){
  
  var view = Backbone.Marionette.ItemView.extend({
    className: 'create-deck',
    template: ItemTemplate,

    events:{
      'click .save-button' : 'save'
    },

    initialize: function(){
      this.bindViewEvents();
      this.model = new Deck();
      Backbone.Validation.bind(this, { forceUpdate:true });
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
      var data = Backbone.Syphon.serialize(this)
        , model = this.model;
      
      model.set(data);
      
      if (model.isValid()){
        model.save({}, { 
          wait:true, 
          silent:true,
          success:function(){
            Data.Decks.add(model);
            Backbone.history.navigate("decks", { trigger:true });
          }
        });      
      }
        
      return false;
    }

  });

  return view;
});