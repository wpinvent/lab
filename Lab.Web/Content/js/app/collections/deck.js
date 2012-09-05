define(['backbone', 'marionette', 'app/models/deck'], 
function(Backbone, Marionette, Deck){
  return Backbone.Collection.extend({
    model: Deck,
    url:'/decks'
  });
});