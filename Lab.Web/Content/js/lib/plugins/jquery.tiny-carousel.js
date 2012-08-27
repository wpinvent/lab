;(function($, exports){

  function Carousel($element){
    this.$element = $element;
    
    $element.bind('carousel:next carousel:prev', $.proxy(this.move, this));

    this.index = 0;
    this.setup();
  }

  Carousel.prototype = {
  
    setup: function(){
      this.resize();
      this.$element.addClass('carousel-ready');
    },

    resize:function(){
      var width = _calculateSize(this.items());      
      this.wrapper = this.$element.find('.carousel-wrap').css({ width:width });
    },

    items:function(){
      return this.$element.find('.carousel-item');
    },

    count: function(){
      return this.items().length;
    },

    position: function(){
      var item = this.items().eq(this.index),
          position = item.position();

      this.wrapper.css({ left: (position.left*-1) });
    },

    next: function(){      
      if ((this.index + 1) >= this.count()) return;
      this.index += 1;
      this.position();
    },

    prev: function(){
      if (this.index == 0) return;
      this.index -= 1;
      this.position();
    },

    add: function($item){
      this.wrapper.append($item);
      this.resize();
    },

    remove: function(at){
      this.items().eq(at).remove();

      var count = this.items().length;
      count <= 1 && (this.index = 0);
      this.index > 0 && at <= this.index && (this.index -= 1)

      this.position();
    },
   
    move: function(e) {
      e.type === "carousel:next" 
        ? this.next() 
        : this.prev();
      
      this.$element.trigger('carousel:moved', [this.index]);
    }

  };

  var _calculateSize = function($items){
    var output = 0;         
    $items.each(function(){ output += $(this).outerWidth(); });
    return output;
  };

  exports.Carousel = Carousel;

})(jQuery, window);