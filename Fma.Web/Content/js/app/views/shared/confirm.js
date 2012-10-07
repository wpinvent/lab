define(['backbone','marionette', 'text!app/templates/shared/confirm.htm'], 
function(Backbone, Marionette, ItemTemplate){

  return Backbone.Marionette.ItemView.extend({
    className: 'confirm-modal',
    template: ItemTemplate,

    events:{ 
      'click .confirm-button' : 'blam'
    },

    blam: function(){
      alert('a');
      return false;
      //this.options.confirmed.call();
    },

    templateHelpers: function(){
      return {
        message: this.options.message
      }
    }
  });

});