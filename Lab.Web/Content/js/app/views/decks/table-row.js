define(['backbone','marionette','text!app/templates/decks/table-row.htm'], 
function(Backbone, Marionette, Template){
  var view = Backbone.Marionette.ItemView.extend({    
    template: Template    
  });

  return view;
});