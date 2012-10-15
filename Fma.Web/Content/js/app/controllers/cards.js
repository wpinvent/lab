define([
  'app/app',
  'app/data',
  'app/models/card',
  'app/collections/card',
  'app/views/cards/index',
  'app/views/cards/create',
  'app/views/cards/edit'
],
function(app, Data, Card, CardCollection, CardsIndexView, CardCreateView, CardEditView){
  var methods = {
    index: function(){
      app.main.show( new CardsIndexView() );
      app.trigger('nav:changed','cards');
    },
    create: function(){
      app.main.show( new CardCreateView() );
      app.trigger('nav:changed','cards');
    },
    edit: function(id){
      var model = Data.Cards.find(function(card){ 
        return card.get('id') == id 
      });
      
      app.main.show(new CardEditView({ model:model }) );
      app.trigger('nav:changed','cards');
    }
  };
  return methods;
});