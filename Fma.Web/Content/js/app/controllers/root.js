define(['backbone'], function(Backbone){
  return {
    root: function(){
      Backbone.history.navigate('decks', { trigger:true });
    }
  };
});