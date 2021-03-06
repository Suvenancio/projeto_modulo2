$('#buscanav').click(function (event) {

    event.preventDefault()

    let busca = $('#inputnav').val()

    buscaFilme(busca)

})

function buscaFilme(busca) {



    let url = "https://www.omdbapi.com/?apikey=f5e93ab6&s="



    $.ajax({

        'url': url + busca,


        'success': function (results) {
            try {

                $('.container-anuncio').addClass('invisivel')
                $("#todosfilmes").removeClass('invisivel')

                let filmes = results.Search;
                console.log(filmes)
                id = []

                for (let i = 0; i < filmes.length; i++) {

                    $('#erro').addClass('escondida')
                    $(`#filme${i}`).html(`<img class="imagem" id= "imagem" src = ${filmes[i].Poster}>`).removeClass('invisivel')
                    id.push(filmes[i].imdbID)

                }


                if (results.Response === "False") {
                    throw new Error("Sua busca não trouxe nenhum resultado!")
                }
            } catch (err) {

                if (results.Response === "False") {
                    $('.filmes').addClass('invisivel')
                    $('#erro').html("Sua busca não trouxe nenhum resultado!").removeClass('escondida')
                }

            }

        }
    })
}

let id;
console.log(id)

$('.filmes').click(function (event) {

    event.preventDefault()

    const indice = $(this).data('indice')

    let arr = id;
    let infoFilmes = arr[indice]
    console.log(infoFilmes)
    criarObjeto(infoFilmes)

})



function criarObjeto(infoFilmes) {

    $.ajax({

        'url': `https://www.omdbapi.com/?i=${infoFilmes}&apikey=7ebfd47e `,


        'success': function (results) {

            $('#myModal').modal('show')
            let filmes = new Filme(results)
            filmes.mostrar()
        }

    })
}


class Filme {

    constructor(results) {

        this.img = results.Poster;
        this.nome = results.Title;
        this.ano = results.Year;
        this.lancamento = results.Released;
        this.duracao = results.Runtime;
        this.genero = results.Genre;
        this.nota = results.Metascore;
        this.Plot = results.Plot;
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





