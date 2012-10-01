define(['backbone','marionette','app/app','app/models/card','app/views/cards/list','app/views/cards/create','text!app/templates/cards/index.htm'], 
function(Backbone, Marionette, App, Card, CardListView, CardCreateView, CardsIndexTemplate){
  var view = Backbone.Marionette.Layout.extend({
    className:'cards',
    template: CardsIndexTemplate,

    regions: {
      cards: '#cards'
    },
    
    events: {
      'click .create-button': 'showCreateView'
    },

    initialize:function(){
      this.bindViewEvents();
    },

    bindViewEvents: function(){
      var view = this;
      view.on('show', function(){
        view.cards.show( new CardListView({ collection:view.collection }) );
      });
    },

    showCreateView: function(){
      var model = new Card(),
          view = new CardCreateView({ 
            model: model, 
            cssSize:'large' 
          });

      App.trigger('modal:show', view);

      return false;
    }
  });

  return view;
});