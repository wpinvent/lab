
define(['backbone','marionette','text!app/templates/cards/list-item.htm'], 
function(Backbone, Marionette, DisplayTemplate){
  
  var view = Backbone.Marionette.ItemView.extend({
    tagName: 'li',
    template: DisplayTemplate,

    templateHelpers: function(){
      var model = this.model;
      return {
        getContent: model.get('content') || "No content",
        imageUrl:function(){
          var image = model.get('image');
          return image ? ["//", location.host, "/uploads/", image.file_name].join('') : ["//", location.host, '/content/images/default.jpg'].join('');
        }
      }
    },

    events:{ 
      'click .delete-button' : 'destroy'
    },

    destroy: function(){
      this.model.destroy();
    }
  });

  return view;
});