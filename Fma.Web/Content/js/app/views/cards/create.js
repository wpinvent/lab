define(['backbone','marionette','validation','syphon','app/data','app/models/card','text!app/templates/cards/create.htm'], 
function(Backbone, Marionette, Validation, Syphon, Data, Card, ItemTemplate){
  
  var view = Backbone.Marionette.ItemView.extend({
    className: 'create-card',
    template: ItemTemplate,

    events:{
      'click .save-button' : 'save'
    },

    initialize: function(){
      this.bindViewEvents();
      this.model = new Card();
      Backbone.Validation.bind(this, { forceUpdate:true });
    },

    bindViewEvents: function(){

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
            Data.Cards.add(model);
            Backbone.history.navigate("cards", { trigger:true });
          }
        });      
      }
        
      return false;
    }

  });

  return view;
});