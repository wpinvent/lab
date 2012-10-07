define(['backbone','marionette', 'syphon', 'app/models/deck','app/views/decks/edit','text!app/templates/decks/edit.htm', 'lib/plugins/jquery.dropdown'], 
function(Backbone, Marionette, Syphon, Deck, DecksTableView, DecksEditTemplate){

  var view = Backbone.Marionette.Layout.extend({
    className:'edit-deck',
    template: DecksEditTemplate,
    
    onRender: function(){
      var view = this;
      view.$el.find('.dropdown').dropdown({
        closed: $.proxy(view.dropdownClosed, view)         
      });
    },

    dropdownClosed: function(){

    }
  });

  return view;
});