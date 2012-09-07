define(['backbone'], function(Backbone){
  return Backbone.Model.extend({
    url:function(){
      var out = '/media';
      if (this.id) out += ('/' + this.id)       
      return out;
    },
    contentUrl:function(){
      return '/uploads/' += this.get('filename') || 'default.png';
    }    
  });
});