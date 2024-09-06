function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //Não exibe informações se não tiver nada na barra de pesquisa
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Você não digitou nada</p> "
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
       if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Cria um novo elemento HTML para cada resultado
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Trailer</a>
        </div>
    `;
       }
       
    }

    if (!resultados){
        section.innerHTML = "<p>Esse jogo não está aqui</p> "
        return
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}