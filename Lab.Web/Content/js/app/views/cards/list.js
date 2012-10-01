define(['backbone','marionette','app/collections/card', 'app/views/cards/list-item'], 
function(Backbone, Marionette, SlideCollection, ItemView, Template){
  var view = Backbone.Marionette.CollectionView.extend({
    tagName:'ol',
    className: 'card-list plain block-grid two-up',
    itemView: ItemView,
      
    initialize: function(){
      this.bindViewEvents();
      this.collection.fetch();
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