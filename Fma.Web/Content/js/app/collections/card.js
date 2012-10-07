define(function(require){
  var backbone = require('backbone'),
      card = require('app/models/card');

  return backbone.Collection.extend({
    model: card,
    url:'/cards'
  });
});