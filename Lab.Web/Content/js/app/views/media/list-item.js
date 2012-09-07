define(['backbone','marionette','text!app/templates/media/list-item.htm'], 
function(Backbone, Marionette, Template){
  var view = Backbone.Marionette.ItemView.extend({
    tagName: 'tr',    
    template: Template,

    events:{ 'click .button' : 'destroy' },

    destroy: function(){
      this.model.destroy();
    }
  });

  return view;
});