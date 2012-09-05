define(['backbone','marionette','app/views/decks/table','text!app/templates/decks/index.htm'], 
function(Backbone, Marionette, DecksTableView, DecksIndexTemplate){

  var view = Backbone.Marionette.Layout.extend({
    className:'decks',
    template: DecksIndexTemplate,
    regions: {
      decks: '#decks' 
    },

    events:{'submit form' : 'createDeck'},

    initialize:function(){
      var view = this;
      view.on('show', function(){
        view.decks.show( new DecksTableView({ collection:view.collection }) );
      });
    },

    createDeck:function(){
      alert('boom');
      return false;
    }
  });

  return view;

});