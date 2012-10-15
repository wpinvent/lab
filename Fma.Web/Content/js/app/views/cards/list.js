define(['backbone','marionette','app/data','app/collections/card', 'app/views/cards/list-item'], 
function(Backbone, Marionette,Data, SlideCollection, ItemView, Template){
  var view = Backbone.Marionette.CollectionView.extend({
    tagName:'ol',
    className: 'card-list plain block-grid three-up',
    itemView: ItemView,
    collection: Data.Cards,
      
    initialize: function(){
      this.bindViewEvents();
    },

    bindViewEvents:function(){
      var collection = this.collection;
      this.on("itemview:removed:model", function(childView){
        collection.remove(childView.model);        
      });
    }
  });

  return view;
});