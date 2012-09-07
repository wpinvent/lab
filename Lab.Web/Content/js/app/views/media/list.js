define(['backbone','marionette','app/collections/media', 'app/views/media/list-item'], 
function(Backbone, Marionette, MediaCollection, ItemView, Template){
  var view = Backbone.Marionette.CollectionView.extend({
    tagName:'ol',
    className: 'media-list',
    itemView: ItemView,
    
    initialize: function(){
      this.bindViewEvents();
      this.collection.fetch();
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