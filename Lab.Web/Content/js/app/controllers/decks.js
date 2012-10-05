define([
  'app/app',
  'app/data',
  'app/models/deck',
  'app/collections/deck',
  'app/views/decks/index',
  'app/views/decks/edit'
], 
function(app, Data, Deck, DeckCollection, DecksIndexView, DeckEditView){
  var methods = {
    index: function(){
      app.main.show( new DecksIndexView() );
    },
    edit: function(id){
      var model = Data.Decks.find(function(m){
        return m.id === id;
      });

      app.main.show( new DeckEditView({ model:model }) );
    }
  };
  return methods;
});