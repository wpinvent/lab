define(['backbone','marionette','app/collections/deck', 'app/views/decks/table-row', 'text!app/templates/decks/table.htm'], 
function(Backbone, Marionette, DeckCollection, ItemView, Template){
  var view = Backbone.Marionette.CompositeView.extend({
    tagName:'table',
    template: Template,
    itemView: ItemView,
    itemViewContainer: 'tbody',
    
    initialize: function(){
      this.collection.fetch();      
      this.bindViewEvents();
    },

    bindViewEvents:function(){
      var collection = this.collection;
      this.on("itemview:removed:model", function(childView){
        collection.remove(childView.model);        
      })
    }
  });

  return view;
});