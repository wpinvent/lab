define([
  'app/app',
  'app/models/card',
  'app/collections/card',
  'app/views/cards/index',
  'app/views/cards/create'
],
function(app, Card, CardCollection, CardsIndexView, CardCreateView){
  var methods = {
    index: function(){
      app.main.show( new CardsIndexView() );
    },
    create: function(){
      app.main.show( new CardCreateView() );
    }
  };
  return methods;
});