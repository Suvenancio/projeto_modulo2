$('#enviar').click(function (evento) {

    evento.preventDefault();

    let nome = $('.nome').val()
    let email = $('.email').val()
    let fone = $('.fone').val()
    let mensagem = $('.mensagem').val()

    if (email.indexOf("@") <= 0) {
        $('.nome').css('border-color', 'unset');
        $('.fone').css('border-color', 'unset');
        $('.mensagem').css('border-color', 'unset');
        $('.email').css('border-color', 'red');
        $('.email').css('border-radius', '4px');
        $('.mensagemerro').html('Email inválido.').css('color', 'red');
    }
    else if (nome === "") {
        $('.email').css('border-color', 'unset');
        $('.mensagem').css('border-color', 'unset');
        $('.fone').css('border-color', 'unset');
        $('.nome').css('border-color', 'red');
        $('.nome').css('border-radius', '4px');
        $('.mensagemerro').html('Preencha todos os campos.').css('color', 'red');
    }
    else if (fone === "") {
        $('.nome').css('border-color', 'unset');
        $('.email').css('border-color', 'unset');
        $('.mensagem').css('border-color', 'unset');
        $('.fone').css('border-color', 'red');
        $('.fone').css('border-radius', '4px');
        $('.mensagemerro').html('Preencha todos os campos.').css('color', 'red');
    }
    else if (mensagem === "") {
        $('.nome').css('border-color', 'unset');
        $('.fone').css('border-color', 'unset');
        $('.email').css('border-color', 'unset');
        $('.mensagem').css('border-color', 'red');
        $('.mensagem').css('border-radius', '4px');
        $('.mensagemerro').html('Preencha todos os campos.').css('color', 'red');
    }
    else {
        $('.nome').css('border-color', 'unset');
        $('.fone').css('border-color', 'unset');
        $('.email').css('border-color', 'unset');
        $('.mensagem').css('border-color', 'unset');
        $('.mensagemerro').html('Mensagem enviada com sucesso, temos um máximo de 48h para entrar em contato em seu email.').css('color', 'green');
    }
});