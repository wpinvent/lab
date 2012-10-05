define(['backbone','marionette', 'syphon', 'app/models/deck','app/views/decks/table','text!app/templates/decks/index.htm'], 
function(Backbone, Marionette, Syphon, Deck, DecksTableView, DecksIndexTemplate){

  var view = Backbone.Marionette.Layout.extend({
    className:'decks',
    template: DecksIndexTemplate,

    regions: {
      decks: '#decks' 
    },
    
    ui: { 
      $form:  'form',
      $input: 'input'
    },

    events: {'submit form' : 'createDeck'},

    initialize:function(){
      this.bindViewEvents();
    },

    bindViewEvents: function(){
      var view = this;
      view.on('show', function(){
        view.decks.show( new DecksTableView() );
      });
    },

    createDeck:function(){
      var data = Backbone.Syphon.serialize(this);      
      this.collection.create(data, { wait:true });
      this.resetForm();
      return false;
    },

    resetForm:function(){
      this.ui.$form[0].reset();
      this.ui.$input.focus();
    }
  });

  return view;

});