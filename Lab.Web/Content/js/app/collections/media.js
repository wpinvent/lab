define(function(require){
  var backbone = require('backbone'),
      media = require('app/models/media');

  return backbone.Model.extend({
    model: media,
    url:'/media'
  });
});