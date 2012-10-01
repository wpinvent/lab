define([
  'app/app', 
  'app/models/deck',
  'app/collections/deck',
  'app/views/decks/index',
  'app/views/decks/edit'
], 
function(app, Deck, DeckCollection, DecksIndexView, DeckEditView){
  var methods = {
    index: function(){
      var decks = new DeckCollection();
      app.main.show( new DecksIndexView({ collection:decks }) );
    },
    edit: function(id){
      var model = new Deck({id:id});
      app.main.show( new DeckEditView({ model:model }) );
    }
  };
  return methods;
});