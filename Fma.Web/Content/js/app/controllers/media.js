define([
  'app/app', 
  'app/collections/media',
  'app/views/media/index',
], 
function(app, MediaCollection, MediaIndexView){
  var methods = {
    index:function(){
      app.trigger('nav:changed','media');
      app.main.show( new MediaIndexView() );
    }
  };
  return methods;
});