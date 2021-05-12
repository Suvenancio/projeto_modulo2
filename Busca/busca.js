$('#btnbusca').click(function(){
   
    buscaFilme(busca)

})

function buscaFilme(){


    let busca = $('#busca').val()
    let url = "http://www.omdbapi.com/?apikey=f5e93ab6&s="


        
        $.ajax({

            'url': url+busca ,
    
        
            'success': function(results)
            {   
                try{

                    let filmes = results.Search;


                    for(let i = 0; i< filmes.length;i++){
                        
                        $(`#filme${i}`).html(`<img src = ${filmes[i].Poster}>`)
                            id.push(filmes[i].imdbID)
                        
                    }


                    if(results.Response=== "False"){
                        throw new Error("Sua busca não trouxe nenhum resultado")
                    }
              }catch(err){
                
                if(results.Response=== "False"){
                    $('.filmes').html(` <h1>Sua busca não trouxe nenhum resultado</h1>`)
                }
            
              }
               
            }      
        })    
}
let id = [];



$('.filmes').click(function () {

          
        $('#myModal').modal('show')

        const indice = $(this).data('indice')
           
        let arr = id;

        let infoFilmes = arr[indice]

        criarObjeto(infoFilmes)

})



function criarObjeto(infoFilmes){

    $.ajax({

        'url': `http://www.omdbapi.com/?i=${infoFilmes}&apikey=7ebfd47e `,


        'success': function(results)
        {   
            const filmes = new Filme2(results)
            filmes.mostrar()
        }
     
    })
}


class Filme2 {

    constructor(results) {

        this.img = results.Poster;
        this.nome = results.Title;
        this.ano = results.Year;
        this.lancamento = results.Released;
        this.duracao = results.Runtime;
        this.genero = results.Genre;
        this.diretor = results.Director;
        this.nota = results.Metascore;
    }

    mostrar(){

        $('.foto').attr("src", this.img)
        $('.nome').text(this.nome)
        $('.ano').text(this.ano)
        $('.lancamento').text(this.lancamento)
        $('.genero').text(this.genero) 
        $('.duracao').text(this.duracao)
        $('.diretor').text(this.diretor)
        $('.nota').text(this.nota)   
    }
}





