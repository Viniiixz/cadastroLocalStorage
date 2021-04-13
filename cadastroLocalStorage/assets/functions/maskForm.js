(function( $ ) {
    $(function() {
  
      var phoneMask = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
      },
      options = {
        onKeyPress: function(val, e, field, options) {
            field.mask(phoneMask.apply({}, arguments), options);
          }
      };
  
      $('input[name="phone"]').mask(phoneMask, options);
      $('input[name="cardPhone"]').mask(phoneMask, options);
  
    });
  })(jQuery);
