define([
  'app/app',
  'app/models/card',
  'app/collections/card',
  'app/views/cards/index'
], 
function(app, Card, CardCollection, CardsIndexView){
  var methods = {
    index: function(){
      var cards = new CardCollection();
      app.main.show( new CardsIndexView({ collection:cards }) );
    }
  };
  return methods;
});