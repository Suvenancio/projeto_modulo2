$('#botao-entrar').on('click', function (evento) {
    let email = $('#email').val();
    let senha = $('#senha').val();

    if (email.indexOf("@") < 0) {
        $('#email').css('border-color', 'red');
        $('#email').css('border-radius', '4px');
        $('#mensagem').html('Email inválido.').css('color', 'red');
    }
    else if (senha === "") {
        $('#senha').css('border-color', 'red');
        $('#senha').css('border-radius', '4px');
        $('#mensagem').html('Insira uma senha.').css('color', 'red');
    }
    else {
        $('#email').css('border-color', 'unset');
        $('#senha').css('border-color', 'unset');
        $('#mensagem').html('Login efetuado com sucesso.').css('color', 'green');
    }



});