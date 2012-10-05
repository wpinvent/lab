define(['backbone'], function(Backbone){
  return Backbone.Model.extend({
    url:function(){
      var out = '/media';
      if (this.id) out += ('/' + this.id);    
      return out;
    },
    contentUrl:function(){
      var root = '/uploads/';
      return root += this.get('filename') || 'default.png';
    }    
  });
});