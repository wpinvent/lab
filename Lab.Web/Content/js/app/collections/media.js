define(['backbone','app/models/media'], function(Backbone, Media){
  return Backbone.Collection.extend({
    model: Media,
    url:'/media'
  });
});