define([
'app/routers/root',
'app/routers/decks',
'app/routers/media',
'app/routers/cards'
],
function(AppRouter, DecksRouter, MediaRouter, CardsRouter){
  return {
    initialize:function(){
      var routers = [AppRouter, DecksRouter, MediaRouter, CardsRouter];
      for(var router in routers)
        new routers[router]();
    }
  }
});
