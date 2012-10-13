﻿define(function(require){
  var Backbone = require('backbone');
  return Backbone.Model.extend({
    url:function(){
      var out = '/decks';
      if (this.id) out += ('/' + this.id)       
      return out;
    },
    defaults: {
      starts_on: null,
      ends_on: null
    }
  });
});