$('#botao-recup').on('click', function (evento) {

    evento.preventDefault();

    var email = $('#email').val();

    if (email.indexOf("@") <= 0) {
        $('#mensagem').html('Email inválido.').css('color', 'red');
    }
    else {
        $('#mensagem').html('Link enviado, confira sua caixa de entrada.').css('color', 'green');
    }
});