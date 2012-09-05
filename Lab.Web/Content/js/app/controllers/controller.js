define(['app/app', 'app/collections/deck', 'app/views/decks/index'], function(app, DeckCollection, DecksIndexView){

  var methods = {
    root: function(){
      var decks = new DeckCollection();
      app.main.show( new DecksIndexView({ collection:decks }) );
    }
  };

  return methods;

});