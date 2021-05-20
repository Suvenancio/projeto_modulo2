$('#todosfilmes').ready(function () {

    requisicao()
})


$('.btn-primary').click(function () {

    window.location.href = './cadastro/cadastro.html';
})

$('#buscanav').click(function (event) {

    event.preventDefault()

    let busca = $('#inputnav').val()

    buscaFilme(busca)
})

$('.filmes').click(function () {



    const indice = $(this).data('indice')

    let arrid = ['tt1201607', 'tt0371746', 'tt3896198', 'tt0167260', 'tt3748528', 'tt2306299', 'tt0293429', 'tt0381707', 'tt1790864',
        'tt6320628', 'tt1392170', 'tt2283336', 'tt2527338', 'tt0213149', 'tt3183660']

    let id = [arrid[indice]]

    criarObjeto(id)
})


function buscaFilme(busca) {



    let url = "https://www.omdbapi.com/?apikey=f5e93ab6&s="



    $.ajax({

        'url': url + busca,


        'success': function (result) {
            try {

                let filmenav = result.Search;
                let id = filmenav[0].imdbID
                criarObjeto(id)


                if (result.Response === "False") {
                    throw new Error("Sua busca não trouxe nenhum resultado")
                }
            } catch (err) {

                if (result.Response === "False") {

                    $('#myModal').modal('show')

                    $('.nome').text("Sua busca não trouxe nenhum resultado")
                    $('.foto').attr("src", "")
                    $('.ano').text("erro")
                    $('.lancamento').text("erro")
                    $('.genero').text("erro")
                    $('.duracao').text("erro")
                    $('.plot').text("erro")
                    $('.nota').text("erro")
                }

            }

        }
    })
}

function requisicao() {

    let arrid = ['tt1201607', 'tt0371746', 'tt3896198', 'tt0167260', 'tt3748528', 'tt2306299', 'tt0293429', 'tt0381707', 'tt1790864',
        'tt6320628', 'tt1392170', 'tt2283336']

    for (let i = 0; i < 12; i++) {

        let id = arrid[i]


        $.ajax({
            'url': `https://www.omdbapi.com/?i=${id}&apikey=7ebfd47e`,

            'success': function (result) {

                $(`#filmes${i}`).html(`<img id= "imagem${i}" class = "imagem" src = ${result.Poster}>`)
            }
        })
    }

}

function criarObjeto(id) {

    $.ajax({
        'url': `https://www.omdbapi.com/?i=${id}&apikey=7ebfd47e`,
        'success': function (result) {

            $('#myModal').modal('show')

            const filme = new Filme(result)
            filme.mostrar();
        }
    })
}

class Filme {

    constructor(result) {

        this.img = result.Poster;
        this.nome = result.Title;
        this.ano = result.Year;
        this.lancamento = result.Released;
        this.duracao = result.Runtime;
        this.genero = result.Genre;
        this.nota = result.Metascore;
        this.Plot = result.Plot;
    }

    mostrar() {

        $('.foto').attr("src", this.img)
        $('.nome').text(this.nome)
        $('.ano').text(this.ano)
        $('.lancamento').text(this.lancamento)
        $('.genero').text(this.genero)
        $('.duracao').text(this.duracao)
        $('.nota').text(this.nota)
        $('.plot').text(this.Plot)
    }
}