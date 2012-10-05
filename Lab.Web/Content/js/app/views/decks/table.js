define(['backbone','marionette','app/data','app/collections/deck', 'app/views/decks/table-row', 'text!app/templates/decks/table.htm'], 
function(Backbone, Marionette, Data, DeckCollection, ItemView, Template){
  var view = Backbone.Marionette.CompositeView.extend({
    tagName:'table',
    template: Template,
    itemView: ItemView,
    itemViewContainer: 'tbody',
    collection: Data.Decks,
    
    initialize: function(){
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