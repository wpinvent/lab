define(['backbone','marionette','text!app/templates/media/list-item.htm'], 
function(Backbone, Marionette, Template){
  var view = Backbone.Marionette.ItemView.extend({
    tagName: 'li',
    template: Template,

    templateHelpers: {
      fileUrl:function(filename){
        return ["//", location.host, "/uploads/", filename].join('');
      }
    },

    events:{ 'click .button' : 'destroy' },

    destroy: function(){
      this.model.destroy();
    }
  });

  return view;
});