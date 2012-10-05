define(['backbone','marionette','text!app/templates/cards/create.htm'], 
function(Backbone, Marionette, ItemTemplate){
  
  var view = Backbone.Marionette.ItemView.extend({
    className: 'create-card',
    template: ItemTemplate,

    events:{
      'click .cancel-button' : 'cancel',
      'click .save-button' : 'save'
    },

    initialize: function(){
      this.bindViewEvents();
    },

    bindViewEvents: function(){
      var view = this
        , collection = new MediaCollection();

      view.on('show', function(){
        new MediaListView({ collection:view.collection });
      });
    },

    cancel: function(){
      
    },

    save: function(){

    }

  });

  return view;
});