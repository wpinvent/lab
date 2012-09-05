define(function(require){
  var backbone = require('backbone'),
      deck = require('app/models/deck');

  return backbone.Model.extend({
    model: deck,
    url:'/decks'
  });
});