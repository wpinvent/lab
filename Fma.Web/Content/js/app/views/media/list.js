define(['backbone','marionette','app/data','app/collections/media', 'app/views/media/list-item'], 
function(Backbone, Marionette, Data, MediaCollection, ItemView, Template){
  var view = Backbone.Marionette.CollectionView.extend({
    tagName:'ol',
    className: 'media-list block-grid four-up',
    itemView: ItemView,
    
    initialize: function(){
      this.collection = Data.Media;
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