define(['app/app','backbone'], function(app, Backbone){
  return {
    root: function(){
      Backbone.history.navigate('decks', { trigger:true });
      app.trigger('nav:changed','decks');
    }
  };
});