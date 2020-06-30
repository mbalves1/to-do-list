import '../js/view/tabela.js'
import '../js/view/formulario.js'


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })



  (function () {
    
    const $campoBusca = $('#busca');

    $campoBusca.on('input', function () {
        const $textoCampoBusca = $(this).val().trim();

        if ($textoCampoBusca.length > 0) {
            $('.cartao').hide().filter(function () {
                return $(this).find(".cartao-conteudo").text().match(new RegExp($textoCampoBusca, "i"));
            }).show().replace("$textoCampoBusca","<span>${$textoCampoBusca}</span>");
        } else {
            $('.cartao').show();
        }
    })

})();