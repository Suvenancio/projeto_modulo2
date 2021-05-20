$('#botao-cadastrar').on('click', function (evento) {

    evento.preventDefault()

    let senha = $('#senha').val();
    let conf = $('#conf-senha').val();
    let email = $('#email').val();
    let nome = $('#nome').val();
    let sobrenome = $('#sobrenome').val();
    let rg = $('#rg').val();
    let cep = $('#cep').val();
    let rua = $('#rua').val();
    let numero = $('#numero').val();
    let bairro = $('#bairro').val();
    let cidade = $('#cidade').val();
    let estado = $('#estado').val();

    if (email.indexOf("@") < 0) {
        $('#mensagem').html('Email inválido.').css('color', 'red');
    }
    else if (senha !== conf) {
        $('#mensagem').html('Informe uma senha.').css('color', 'red');
    }
    else if (senha.length < 6) {
        $('#mensagem').html('A senha deve ter ao menos 6 digitos.').css('color', 'red');
    }
    else if (nome.indexOf(" ") > 0) {
        $('#mensagem').html('Informe somente o primeiro nome.').css('color', 'red');
    }
    else if (nome === "" || sobrenome === "" || rg === "" || cep === "" || rua === "" || numero === "" || bairro === "" || cidade === "" || estado === "") {
        $('#mensagem').html('Preencha todos os campos.').css('color', 'red');
    }
    else {
        $('#mensagem').html('Cadastro feito com sucesso.').css('color', 'green');
    }

});

$('#cep').on('blur', function (evento) {
    var cep = $('#cep').val();

    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,

        success: function (dados) {
            $('#rua').val(dados.logradouro);
            $('#complemento').val(dados.complemento);
            $('#bairro').val(dados.bairro);
            $('#cidade').val(dados.localidade);
            $('#estado').val(dados.uf);
        },
    });
});