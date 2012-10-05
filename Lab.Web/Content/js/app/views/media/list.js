define(['backbone','marionette','app/collections/media', 'app/views/media/list-item'], 
function(Backbone, Marionette, MediaCollection, ItemView, Template){
  var view = Backbone.Marionette.CollectionView.extend({
    tagName:'ol',
    className: 'media-list block-grid four-up',
    itemView: ItemView,
    
    initialize: function(){
      this.bindViewEvents();
      this.enableSelectMode();
      this.collection.fetch();
    },

    bindViewEvents:function(){
      var collection = this.collection;
      this.on("itemview:removed:model", function(childView){
        collection.remove(childView.model);        
      })
    },

    enableSelectMode: function(selectable){ 
      var view = this
        , options = view.options
        , $input = view.ui.$input;
       
      selectable = selectable || options.selectable;
      
      if (selectable && $input.length === 1){ 
        view.$el.addClass('selectable-items');alert('a');
        view.on('itemview:selected', function(childView){
          alert('4');          
          view.selectedItemView && view.selectedItemView.$el.removeClass('selected');
          view.selectedItemView = childView;
          view.selectedItemView.addClass('selected');
          $input.val(childView.model.id);
        });
      }
    }
  });

  return view;
});