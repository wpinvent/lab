define(function(require){
  var Backbone = require('backbone');
  return Backbone.Model.extend({
    url:function(){
      var out = '/cards';
      if (this.id) out += ('/' + this.id)       
      return out;
    }
  });
});