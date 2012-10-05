define(['backbone','marionette','app/app','app/models/card','app/views/cards/list','app/views/cards/create','text!app/templates/cards/index.htm'], 
function(Backbone, Marionette, App, Card, CardListView, CardCreateView, CardsIndexTemplate){
  var view = Backbone.Marionette.Layout.extend({
    className:'cards',
    template: CardsIndexTemplate,

    regions: {
      cards: '#cards'
    },
    
    initialize:function(){
      this.bindViewEvents();
    },

    bindViewEvents: function(){
      var view = this;
      view.on('show', function(){
        view.cards.show( new CardListView() );
      });
    }
  });

  return view;
});