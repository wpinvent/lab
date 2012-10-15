define(['backbone','marionette','foundation'], 
function(Backbone, Marionette, Foundation){

  var cssSizes = ['expand', 'xlarge', 'large', 'medium', 'small'];

  var view = Backbone.Marionette.Layout.extend({
    regions: {
      content: '#modal-content'
    },

    events: {
      'click .close-button':'hide'
    },

    reveal: function(contentView){
      this.setSize(contentView.options.cssSize);
      this.content.show(contentView);
      $(this.el).reveal({
        animationSpeed: 100      
      });
    },

    hide: function(){
      $(this.el).trigger('reveal:close');
    },

    setSize: function(cssSize){
      this.resetSize();
      cssSize && this.$el.addClass(cssSize);
    },

    resetSize: function(){
      for(var size in cssSizes)
        this.$el.removeClass(cssSizes[size]);
    }
  });

  return view;

});