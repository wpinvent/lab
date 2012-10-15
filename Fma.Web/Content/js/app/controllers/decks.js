define([
  'app/app',
  'app/data',
  'app/models/deck',
  'app/collections/deck',
  'app/views/decks/index',
  'app/views/decks/create',
  'app/views/decks/edit'
], 
function(app, Data, Deck, DeckCollection, DecksIndexView, DeckCreateView, DeckEditView){

  var methods = {
    index: function(){
      app.main.show( new DecksIndexView() );
      app.trigger('nav:changed','decks');
    },
    create: function(){
      app.main.show( new DeckCreateView() );
      app.trigger('nav:changed','decks');
    },
    edit: function(id){
      var model = Data.Decks.find(function(m){
        return m.id === id;
      });

      app.main.show( new DeckEditView({ model:model }) );
      app.trigger('nav:changed','decks');
    }
  };
  return methods;
});