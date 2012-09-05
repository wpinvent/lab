define(function(require){
  var backbone = require('backbone'),
      media = require('app/models/media');

  return backbone.Collection.extend({
    model: media,
    url:'/media'
  });
});