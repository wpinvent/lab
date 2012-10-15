define(['backbone','marionette','syphon','app/data','app/models/card','text!app/templates/cards/edit.htm'], 
function(Backbone, Marionette, Syphon, Data, Card, ItemTemplate){
  
  var view = Backbone.Marionette.ItemView.extend({
    className: 'create-card',
    template: ItemTemplate,

    events:{
      'click .save-button' : 'save'
    },

    initialize: function(){
      Backbone.Validation.bind(this, { forceUpdate:true });
    },

    save: function(){
      var data = Backbone.Syphon.serialize(this)
        , model = this.model;
      
      model.set(data);
      console.log(model.isValid());

      if (model.isValid()){
        model.save({}, { 
          success:function(){
            Backbone.history.navigate("cards", { trigger:true });
          }
        });      
      }        
      return false;
    }

  });

  return view;
});