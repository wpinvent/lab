define([
  'app/collections/card', 
  'app/collections/deck', 
  'app/collections/media'
], 
function(CardCollection, DeckCollection, MediaCollection){ 
  return {
    Cards: new CardCollection(applicationData.cards),
    Decks: new DeckCollection(applicationData.decks),
    Media: new MediaCollection(applicationData.media)
  }
});
