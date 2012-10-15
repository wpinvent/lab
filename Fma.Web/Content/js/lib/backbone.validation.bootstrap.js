define(['jquery', 'underscore','backbone','validation'],
function($, _, Backbone, Validation){

  _.extend(Backbone.Validation.callbacks, {
    valid: function(view, attr, selector) {
      var $input = view.$el.find('[name="'+ attr  +'"]')
        , $parent = $input.parent()
        , $error = $parent.find('small');

      $parent.removeClass('error');
      $error.remove();
    },
    invalid: function (view, attr, error, selector) {
      var $input = view.$el.find('[name="'+ attr +'"]')
        , $parent = $input.parent()
        , $error = $parent.find('small');
      
      $parent.addClass('error');      
        
      $error.length && $error.remove();
      $error = $('<small>' + error + '</small>');
      $error.insertAfter($input);
    }
  });

  _.extend(Backbone.Validation.patterns, {
    date: /^(0[1-9]|1[0-2])\/([0-2][0-9]|3[0-1])\/([1-9][0-9]{3})$/
  });

});