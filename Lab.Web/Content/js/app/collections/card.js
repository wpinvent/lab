define(function(require){
  var backbone = require('backbone'),
      card = require('app/models/card');

  return backbone.Model.extend({
    model: card,
    url:'/cards'
  });
});