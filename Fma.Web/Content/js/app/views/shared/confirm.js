define(['app/app', 'backbone','marionette', 'text!app/templates/shared/confirm.htm'], 
function(app, Backbone, Marionette, ItemTemplate){

  return Backbone.Marionette.ItemView.extend({
    className: 'confirm-modal',
    template: ItemTemplate,
    
    events:{ 
      'click .confirm-button' : 'confirmed'
    },

    confirmed: function(){
      this.options.confirmed.call();
      app.trigger('modal:close')
    },

    templateHelpers: function(){
      return {
        message: this.options.message
      }
    }
  });

});