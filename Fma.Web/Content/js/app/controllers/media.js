define([
  'app/app', 
  'app/collections/media',
  'app/views/media/index',
], 
function(app, MediaCollection, MediaIndexView){
  var methods = {
    index:function(){
      app.main.show( new MediaIndexView() );
    }
  };
  return methods;
});