define(['app/app','backbone','marionette','app/views/shared/confirm','text!app/templates/media/list-item.htm'], 
function(App, Backbone, Marionette, ConfirmView, Template){
  var view = Backbone.Marionette.ItemView.extend({
    tagName: 'li',
    template: Template,

    templateHelpers: {
      fileUrl:function(filename){
        return ["//", location.host, "/uploads/", filename].join('');
      }
    },

    events:{ 'click .button' : 'showConfirmView' },

    showConfirmView: function(){
      var model = this.model
        , view = new ConfirmView({
            message:"Are you sure you want to delete this image?",
            model: model,
            confirmed: function(){
              model.destroy();
            }
          });

      App.trigger('modal:show', view);
    }
  });

  return view;
});