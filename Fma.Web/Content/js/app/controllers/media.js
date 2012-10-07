define([
  'app/app', 
  'app/collections/media',
  'app/views/media/index',
], 
function(app, MediaCollection, MediaIndexView){
  var methods = {
    index:function(){
      var media = new MediaCollection();
      app.main.show( new MediaIndexView({ collection:media }) );
    }
  };
  return methods;
});