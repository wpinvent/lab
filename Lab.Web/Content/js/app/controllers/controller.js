define([
  'app/app', 
  'app/collections/deck',
  'app/collections/media',
  'app/views/decks/index',
  'app/views/media/index'
], 
function(app, DeckCollection, MediaCollection, DecksIndexView, MediaIndexView){

  var methods = {
    root: function(){
      var decks = new DeckCollection();
      app.main.show( new DecksIndexView({ collection:decks }) );
    },
    media:function(){
      var media = new MediaCollection();
      app.main.show( new MediaIndexView({ collection:media }) );
    }
  };

  return methods;

});