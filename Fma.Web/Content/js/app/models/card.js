define(['backbone','validate'],
function(Backbone, Validate){
  return Backbone.Model.extend({
    url:function(){
      var out = '/cards';
      if (this.id) out += ('/' + this.id)       
      return out;
    },
    validation: {
      Content: {
        required:true,
        msg: "Card content is required."
      },
      Url:[
        { required: true, msg: "Url is required." },
        { pattern:'url', msg: "The url entered is not valid." }
      ]
    }
  });
});