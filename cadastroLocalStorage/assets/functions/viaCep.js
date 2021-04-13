(function( $ ) {
    $('input[name="postalCode"]').blur(function(){
                  // Remove tudo o que não é número para fazer a pesquisa
                  var cep = this.value.replace(/[^0-9]/, "");
                  if(cep.length != 8){
                      return false;
                  }
                  var url = "https://viacep.com.br/ws/"+cep+"/json/";
                  $.getJSON(url, function(dadosRetorno){
                      try{
                          $('input[name="address"]').val(dadosRetorno.logradouro);
                          $('input[name="district"]').val(dadosRetorno.bairro);
                          $('input[name="city"]').val(dadosRetorno.localidade);
                          $('input[name="state"]').val(dadosRetorno.uf);
                      }catch(ex){}
                  });
              });
  })(jQuery);