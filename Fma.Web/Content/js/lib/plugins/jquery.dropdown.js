;(function($){

  function Dropdown($element, settings){
    this.$element = $element;
    this.configure(settings);
    this.bindEvents();
  }

  Dropdown.prototype = {

    bindEvents: function(){
      this.$element
        .on('click.dropdown', $.proxy(this.clicked, this))
        .on('dropdown:opened', $.proxy(this.open, this))
        .on('dropdown:closed', $.proxy(this.close, this));
    },

    configure:function(settings){
      this.settings = $.extend({}, Dropdown.settings, settings);
    },

    open: function(){
      this.$element.addClass('open');
      this.settings.opened && this.settings.opened.call(this)
    },

    close: function(){
      this.$element.removeClass('open');
      this.settings.closed && this.settings.closed.call(this)
    },

    clicked: function(e){
      var $element = this.$element;
      $element.trigger('dropdown:' + ($element.hasClass('open') ? 'closed' : 'opened'));
    }
  };

  Dropdown.settings = {
    closed: null,
    opened: null
  };

  $.fn.dropdown = function(settings){
    if (!this.length) return;
    return this.each(function(){
      var $node = $(this);
      $node.data('Dropdown', new Dropdown($node, settings));
    });
  };

})(jQuery);